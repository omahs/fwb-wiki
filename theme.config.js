export default {
  github: 'https://github.com/shuding/nextra',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – Nextra',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">FWB Wiki</span>
    </>
  ),
  head: (
    <>
      <meta charSet="utf-8"/>
      <meta http-equiv="x-ua-compatible" content="ie=edge"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <meta name="format-detection" content="telephone=no"/>
      <link preload="true" rel="icon" href="/favicon.ico"/>
      <link preload="true" rel="mask-icon" href="/favicon.ico" color="#000000"/>
      <link rel="preconnect" href="https://cdn.sanity.io" crossorigin="anonymous"/>
      <title>FWB - Wiki</title>
      <meta name="description" content="FWB - Wiki"/>
      <meta property="og:title" content="FWB - Wiki"/>
      <meta name="twitter:title" content="FWB - Wiki"/>
      <meta property="og:description" content="FWB - Wiki"/>
      <meta name="twitter:description" content="FWB - Wiki"/>
      <meta property="og:image" content="https://cdn.sanity.io/images/muknps09/production/c833ca53ad3be050adc701f83e3045a6c70f2fe1-1200x628.png?rect=2,0,1196,628&amp;w=1200&amp;h=630"/>
      <meta name="twitter:image" content="https://cdn.sanity.io/images/muknps09/production/c833ca53ad3be050adc701f83e3045a6c70f2fe1-1200x628.png?rect=2,0,1196,628&amp;w=1200&amp;h=630"/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="og:site_name" content="Friends With Benefits"/>
      <meta name="next-head-count" content="18"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Nextra.</>,
}
