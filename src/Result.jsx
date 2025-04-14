function Result({ name, score }) {
    let message = '';
  
    if (score >= 90) {
      message = '🎉 ممتاز! نتيجتك رائعة!';
    } else if (score >= 75) {
      message = '😊 جيد جداً! اجتزت الاختبار بنجاح';
    } else {
      message = '❌ لم تنجح، حاول مرة أخرى.';
    }
  
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
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          backgroundColor: 'white',
          width: '90%',
          maxWidth: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <h2 style={{ margin: '0 0 1.5rem 0' }}>نتيجة الاختبار</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}><strong>الاسم:</strong> {name}</p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}><strong>الدرجة:</strong> {score} من 100</p>
          <h3 style={{ 
            margin: 0,
            color: score >= 90 ? '#28a745' : score >= 75 ? '#17a2b8' : '#dc3545'
          }}>{message}</h3>
        </div>
      </div>
    );
  }
  
  export default Result;