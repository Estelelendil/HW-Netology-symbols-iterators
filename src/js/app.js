/* eslint-disable no-console */
import Team from './iterator';
import NewTeam from './generator';

const Zero = new Team();

for (const item of Zero) {
  console.log(item);
}

const Kus = new NewTeam();
for (const item of Kus) {
  console.log(item);
}
