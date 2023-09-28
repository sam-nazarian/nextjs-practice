import Link from 'next/link';
import { Fragment } from 'react';

// domain.com/news
function NewsPage() {
  return (
    <Fragment>
      <ul>
        <li>
          {/* preserves states across pages, makes a single page application*/}
          <Link href="/news/nextjs-is-a-great-framework">NextJS Is A Great Framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
