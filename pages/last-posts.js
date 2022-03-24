import { useEffect, useState } from 'react'
import useSWR from 'swr'

//useEffect 客户端实时获取 + getServerSideProps 服务器获取

function LastPostsPage(props) {
  const [posts, setPosts] = useState(props.data)
  // const [isLoading, setIsLoading] = useState(false)

  //页面渲染时，再从
  //客户端获取数据 &userId=2 实时获取最新数据 这里的数据不会出现在页面源代码中
  //useSWR 数据获取函数的封装 优点可以实时监听 api 数据的变化
  const { data, error } = useSWR(
    'http://jsonplaceholder.typicode.com/posts?userId=1&userId=2'
  )

  useEffect(() => {
    if (data) {
      setPosts(data)
    }
  }, [data])
  //请求数据
  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('http://jsonplaceholder.typicode.com/posts?userId=1')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data)
  //       setIsLoading(false)
  //     })
  // }, [])
  // if (isLoading) {
  //   return <p>加载中...</p>
  // }
  // if (!posts) {
  //   return <p>加载失败...</p>
  // }

  if (error) {
    return <p>加载失败..</p>
  }

  if (!data && !posts) {
    return <p>加载中...</p>
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          ID：{post.id}， 标题：{post.title}
        </li>
      ))}
    </ul>
  )
}

export default LastPostsPage

//页面渲染前，先从服务器获取数据
//这里获取的数据会展示在页面源码中
export async function getStaticProps() {
  const response = await fetch(
    'http://jsonplaceholder.typicode.com/posts?userId=1'
  )
  const data = await response.json()

  return {
    props: {
      data: data,
    },
  }
}
