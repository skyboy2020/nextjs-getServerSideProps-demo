nextjs useEffect 客户端数据获取
用于后台系统,订单等，隐私后台场景不需要 SEO 的:

useSWR 数据获取函数的封装 优点可以实时监听 api 数据的变化
useSWR 说明：https://swr.vercel.app/docs/data-fetching

useEffect 客户端实时获取 + getServerSideProps 服务器获取
pages/last-posts.js

nextjs getServerSideProps 服务器端数据获取：

pages/[uid].js

pages/user-profile.js

getServerSideProps 是根据每次真实的请求进行渲染
getServerSideProps 获取路由动态参数页面不需要 getStaticPaths
而 getStaticProps 是 build 打包时运行
所以 getServerSide 中有完整的 req 和 res 对象
