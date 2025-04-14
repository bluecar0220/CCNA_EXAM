import { useState, useEffect } from 'react';
import questions from './questionsData';

function Quiz({ duration, onFinish, userName }) {
  const questionsPerPage = 10;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(duration);
  const [error, setError] = useState('');

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      setError('⚠️ يجب الإجابة على جميع الأسئلة قبل تسليم الاختبار.');
      return;
    }
    setError('');
    let score = 0;
    answers.forEach((ans, idx) => {
      if (ans === questions[idx].answer) score++;
    });
    const percentage = Math.round((score / questions.length) * 100);
    onFinish(percentage);
  };

  const handleRestart = () => {
    setPage(0);
    setAnswers(Array(questions.length).fill(null));
    setTimeLeft(duration);
    setError('');
  };

  const startIdx = page * questionsPerPage;
  const currentQuestions = questions.slice(startIdx, startIdx + questionsPerPage);

  return (
    <div className="quiz-container">
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        backgroundColor: '#007bff',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        fontWeight: 'bold',
        zIndex: 1000,
        direction: 'rtl'
      }}>
        👤 {userName}
      </div>
      <div className={`timer ${timeLeft <= 60 ? 'red' : ''}`}>
        ⏰ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
      </div>
      <h2>📝 اختبار CCNA (صفحة {page + 1} من {totalPages})</h2>

      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      {currentQuestions.map((q, i) => {
        const globalIndex = startIdx + i;
        return (
          <div key={globalIndex} className="question-block">
            <p><strong>{globalIndex + 1}.</strong> {q.question}</p>
            <div className="option-group">
              {q.options.map((opt, j) => (
                <label key={j} className="option-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  <input
                    type="radio"
                    name={`question-${globalIndex}`}
                    value={opt}
                    checked={answers[globalIndex] === opt}
                    onChange={() => handleAnswerChange(globalIndex, opt)}
                  /> {opt}
                </label>
              ))}
            </div>
          </div>
        );
      })}

      <div className="nav-buttons">
        {page > 0 && <button onClick={() => setPage(page - 1)}>⬅ رجوع</button>}
        {page < totalPages - 1 && <button onClick={() => setPage(page + 1)}>التالي ➡</button>}
        {page === totalPages - 1 && <button onClick={handleSubmit}>📨 تسليم الأجوبة</button>}
      </div>

      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <button onClick={handleRestart}>🔁 إعادة الاختبار</button>
      </div>
    </div>
  );
}

export default Quiz;