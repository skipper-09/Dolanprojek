
import Hero from '../Component/Hero'
import Service from '../Component/ServiceSection'
import PopulerDestination from '../Component/PopulerDestination'
import PopulerGuide from '../Component/PopulerGuide'
import Layout from '../Component/Layout'
export default function Home() {
  return (
    <>
      <Layout title="Dolan| Homepage">
        <Hero />
        <section>
          <Service />
          <PopulerDestination />
          <PopulerGuide />
        </section>
      </Layout>


    </>
  )
}


