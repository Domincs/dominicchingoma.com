import { Blog } from '@components/sections';
import { Nav, Page } from '@components/common';

export default function Home({ articles }) {
  return (
    <Page
      title='Dominic Chingoma | Blog'
      description="Dominic's thoughts on Software Development, DevOps, Cloud Computing and Tech in general."
      url='https://dominicchingoma.com/blog'
      keywords='Dominic, Dominic Chingoma, dominicchingoma, Chingoma, software developer, web developer, web developer blog, software developer blog, software engineer,Blogger, Zimbabwe, Harare software developer, zimbabwe developer blog, software development blog, DevOps blog, Cloud Computing blog, React Developer, React Blog'
      image='https://dominicchingoma.com/images/banner.png'
      canonicalURL='https://dominicchingoma.com/blog'
    >
      <Nav className='fixed border-b bg-white bg-opacity-75 py-3 backdrop-blur dark:bg-slate-900 dark:bg-opacity-90' />
      <Blog articles={articles} />
    </Page>
  );
}

export async function getStaticProps() {
  const { NEXT_PUBLIC_DEV_TO_USERNAME } = process.env;
  const res = await fetch(
    `https://dev.to/api/articles?username=${NEXT_PUBLIC_DEV_TO_USERNAME}&state=all`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}
