import { useEffect,useCallback,useRef,useState } from 'react';

function InfiniteScrolling() {
  const [memes,setMemes]=useState([])
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const loaderRef=useRef(null);
  const fetchMemes = useCallback(async () => {
    if (loading) return; // prevent duplicate calls
    setLoading(true);
    try {
      const res = await fetch("https://meme-api.com/gimme/10");
      const data = await res.json();

      setMemes((prev) => [...prev, ...data.memes]);
    } catch (err) {
      setLoading(false);
      setError("Failed to load memes");
    } finally {
      setLoading(false);
    }
  }, [loading]);
  useEffect(()=>{
   fetchMemes()
  },[]);
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
        const entry=entries[0];
        if(entry.isIntersecting && !loading){
            fetchMemes()
        }
    })
    if(loaderRef.current){
        observer.observe(loaderRef.current)
    }
    return ()=>{
        if(loaderRef.current){
        observer.unobserve(loaderRef.current)
    }
    }
  },[loading])
  return (
    <div>
         {memes.map((meme, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{meme.title}</h3>
          <img src={meme.url} alt={meme.title} style={{ maxWidth: "500px" }} />
        </div>
      ))}
        <div ref={loaderRef} style={{ height: "40px" }} />

      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}

export default InfiniteScrolling