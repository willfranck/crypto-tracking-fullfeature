import { getServerSession } from 'next-auth'
import { authOptions } from '@lib/auth'


export const config = { matcher: '/dashboard' }

export async function getServerSideProps(context: any) {
  const session = await getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      }
    }
  }

  return {
    props: {
      session,
    }
  }
}

export { default } from 'next-auth/middleware'
