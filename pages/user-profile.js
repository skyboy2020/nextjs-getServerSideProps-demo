function UserProfilePage(props) {
  return <h1>{props.userName}</h1>
}

export default UserProfilePage

export async function getServerSideProps(context) {
  //getServerSideProps是根据真实的请求进行渲染
  //而getStaticProps是build打包时运行
  //所以getServerSide中有完整的req和res对象
  const { params, req, res } = context
  console.log('服务器正在运行...')
  console.log(req)
  console.log(res)
  return {
    props: {
      userName: 'Summer',
    },
  }
}
