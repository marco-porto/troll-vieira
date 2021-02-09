import { useRouter } from 'next/router'
import links from './links.json'

export default function RandomLinks() {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    router.push(links[Math.floor((Math.random() * links.length) + 1)])
  }
  return <h1>Doing some troll stuff</h1>
}
