import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1 className="title">SYNC-View v 1.0</h1>
        <p className="info">이미지와 PDF를 불러내어 편집 및 여러 작업을 할 수 있습니다. </p>
        <button className="btn">매뉴얼 보기 </button>
      </div>
    </div>
  )
}

export default App
