import { Container } from '../components/container';
import { Hero } from '../components/hero';

export default function Homepage() {
  return (
    <div>
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>
          <Hero
            title='Linear is a better way to build products'
            subtitle='Meet the new standard for modern software development.
Streamline issues, sprints, and product roadmaps.'
          />
        </Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </div>
  );
}
