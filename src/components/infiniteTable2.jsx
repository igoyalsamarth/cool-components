import { useEffect, useRef, useState } from "react";

const sampleData = ['ramu','shamu','chamu','khamu','mamu']


export default function InfiniteTable2(){
  
  const [data, setData] = useState(sampleData)

  const loadMore = () => {
    const extraData = new Array(5).fill('samu')
    setData([...data, ...extraData])
  }

  return(
    <div>
      <DataTable data={data} loadMore={loadMore} />
    </div>
  );
}

const DataTable = ({loadMore, data}) => {
  const ref = useRef(null)
  let isVisible = useIntersectionObserver(ref,{threshold:0.5})

  useEffect(() => {
    if(isVisible) loadMore()
  }, [isVisible])

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((Item, index) => (
              <tr>
                <td>{index}</td>
                <td>{Item}</td>
              </tr>
            ))
          }
          <tr ref={ref}>
            <td>Loading...</td>
            <td>loading...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};