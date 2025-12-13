import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Btn from "./Btn";

const USER_STORAGE_KEY = "userProfile";

export default function SignUpModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const userProfile = {
      username: username,
      email: email,
      password: password,
      signedUpAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userProfile));

      setUsername("");
      setEmail("");
      setPassword("");

      onClose();
    } catch (error) {
      console.error("Error saving user data to localStorage:", error);
      alert("Failed to save profile. Please try again.");
    }
  };

  return (
    <Modal title="Sign Up" isOpen={isOpen} onClose={onClose}>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <Input
          l={true}
          id="username"
          placeholder="Username"
          type="text"
          r={true}
          value={username}
          onInput={(e) => setUsername(e.target.value)}
        />
        <Input
          l={true}
          id="email"
          placeholder="E-mail"
          type="email"
          r={true}
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <Input
          l={true}
          id="password"
          placeholder="Password"
          type="password"
          r={true}
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />

        <Btn text="Sign Up" className="mx-auto mb-4" submit={true} />
      </form>
      <p className="text-center text-sm">
        Already have an account?{" "}
        <a href="#" className="underline">
          Log In
        </a>
      </p>
    </Modal>
  );
}
