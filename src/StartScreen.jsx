import { useState } from 'react';

function StartScreen({ onStart }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState(5); // بالدقائق

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && time > 0) {
      onStart(name, time * 60); // نحوله إلى ثواني
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        width: '90%',
        maxWidth: '350px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <h2 style={{ textAlign: 'center', margin: 0 }}> CCNA اختبار</h2>
        <input
          type="text"
          placeholder="ادخل اسمك"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: '0.8rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
            textAlign: 'center',
            fontSize: '1rem'
          }}
        />
        <input
          type="number"
          placeholder="مدة الاختبار بالدقائق"
          value={time}
          onChange={(e) => setTime(+e.target.value)}
          required
          min="1"
          style={{
            padding: '0.8rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
            textAlign: 'center',
            fontSize: '1rem'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '0.8rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
            width: '100%',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >ابدأ</button>
      </form>
    </div>
  );
}

export default StartScreen;
