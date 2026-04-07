"use client";
import React, { useState } from "react";
import { supabase } from "./supabase";
import { useUser } from "./ContentApi";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const {setUserId} = useUser()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase

      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      
      .single();

    if (data) {
    setUserId(data.id);  // save id in state
      localStorage.setItem("currentUser", data.id);  // save id in localStorage because when page refresh state will be lost but localStorage will not be lost until we clear it.
      navigate("/");
    } else {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
