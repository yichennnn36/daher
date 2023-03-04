const Loading = () => {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <img alt="icon" src="/images/icon.svg" className="w-[100px] absolute top-0 right-0 m-4 bg-black"/>
      <img alt="loading-icon" src="/images/main-icon.svg" className="w-1/5"/>
    </div>
  )
}

export default Loading;