import { useState, useEffect } from 'react';

// ---- Component definitions (always above App) ----

function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function FactFetcher() {
  const [fact, setFact] = useState("Click the button to get a fact.");

  async function getFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setFact(data.fact);
  }

  return (
    <div>
      <button onClick={getFact}>Get a random fact</button>
      <p>{fact}</p>
    </div>
  );
}

// ---- The main App component ----

function Login () { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMesssage] = useState("");

  async function handleLogin(event) { 
    event.preventDefault(); 
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json(); 
    if (data.token) { 
      localStorage.setItem("token", data.token);
      setMesssage("Logged In!");
    } else {
      setMesssage(data.error || "Login Failed");
    }
  }

  return (
    <form onSubmit={handleLogin}>
    <h2>Log In</h2>
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
    <button type="submit">Log In</button>
    <p>{message}</p>
    </form>
  );
}

function Signup() {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [message, setMessage] = useState ("");

  async function handleSignup(event) {
    event.preventDefault();
    const response = await fetch ("http://localhost:3000/api/signup", { 
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json(); 
    if (response.ok) { 
      setMessage("Account Created! You can log in now.");
    } else { 
      setMessage(data.error || "Signup Failed.");
    }
  }

  return (
    <form onSubmit={handleSignup}>
    <h2>Sign Up</h2>
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
    <button type="submit">Sign Up</button>
    <p>{message}</p>
    </form>
  );
}

function Profile() { 
  const [email, setEmail] = useState(null);

  async function checkMe() {
    const token = localStorage.getItem("token");
    if (!token) {
      setEmail("Not Logged In.");
      return;
    }
    const response = await fetch ("http://localhost:3000/api/me", {
      headers: { Authorization: "Bearer " + token },
    });
    const data = await response.json();
    setEmail(data.email || "Invalid or expired session.");
  }

  return (
    <div>
    <button onClick={checkMe}>Check who I am</button>
    <p>{email}</p>
    </div>
  );
}


function App() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <h1>Hello, I'm Jonathan</h1>

      <button onClick={() => setClickCount(clickCount + 1)}>
        Clicked {clickCount} times
      </button>

      <Greeting name="Jonathan" />
      <Greeting name="the world" />

      <FactFetcher />
      <Signup />
      <Login />
      <Profile />
    </div>
  );
}

export default App;