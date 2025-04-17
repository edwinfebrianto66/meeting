
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async () => {
    const res = await fetch(`http://localhost:4001/register?email=${email}&password=${password}`, {
      method: 'POST'
    });
    const text = await res.text();
    setMsg(text);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Register</h2>
      <input className="w-full border p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="w-full border p-2" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRegister}>Register</button>
      {msg && <p className="text-sm mt-2 break-all">{msg}</p>}
    </div>
  );
}

export default Register;
