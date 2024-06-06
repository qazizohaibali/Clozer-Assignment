export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://europe-west3-clozer-bc97fb95.cloudfunctions.net/idols/RKAs4VxFlOZ1q2uWhD6UIYgybuj2/tabs?isEditor=false`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }