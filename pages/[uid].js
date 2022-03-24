function UserIdPage(props) {
  return <h1>{props.id}</h1>
}

export default UserIdPage

export async function getServerSideProps(context) {
  const { params } = context
  //获取url中的动态路由参数uid
  const userId = params.uid

  return {
    props: {
      id: 'userid-' + userId,
    },
  }
}
