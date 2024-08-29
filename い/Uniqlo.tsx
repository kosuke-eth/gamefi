import React from 'react';

function UniqloApp() {
  return (
    <div style={{ backgroundColor: '#e60012', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <h1>710 ポイント</h1>
      <p>レベル 8</p>
      <button style={{ backgroundColor: 'white', color: '#e60012', padding: '10px 20px', borderRadius: '20px', border: 'none', marginBottom: '20px' }}>
        今日の服装をチェック
      </button>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <p>保有NFT</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>マーケットプレース</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <p>ランキング</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>プロフィール</p>
        </div>
      </div>
      <footer style={{ position: 'absolute', bottom: '10px', textAlign: 'center' }}>
        <p>© 2024 UNIQLO Wear to Earn</p>
      </footer>
    </div>
  );
}

export default UniqloApp;
