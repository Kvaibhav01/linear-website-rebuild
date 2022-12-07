import { Container } from '../components/container';
import { Header } from '../components/header';
import '../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
      </head>
      <body>
        <div>
          <Header />
          <main className='pt-[48px]'>{children}</main>
          <footer>
            <Container>Footer</Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
