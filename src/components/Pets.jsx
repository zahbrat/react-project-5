import Section from "./Section";
import PetEl from './PetEl'
import Btn from './Btn'

export default function Pets() {
  return (
    <Section title="Interacting with our pets">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <PetEl
          image="/pet1.png"
          desc="Rescue pups pose as ghosts in festive photo shoot"
        />
        <PetEl
          image="/pet2.png"
          desc="Cat interrupts morning coffee on sunny Washington morning"
        />
        <PetEl
          image="/pet3.png"
          desc="New study finds dogs pay more attention to women"
        />
        <PetEl
          image="/pet4.png"
          desc="Petting dogs gives health benefit, even if they are not yours"
        />
      </ul>
      <Btn text="See more"/>
    </Section>
  );
}
