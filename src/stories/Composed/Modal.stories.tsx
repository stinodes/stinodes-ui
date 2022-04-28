import { Story } from '@storybook/react'
import { useState } from 'react'
import { Button, Card, Flex, Modal } from '../../'

export default {
  title: 'Composed/Modal',
  component: Modal,
  argTypes: {},
}

export const Simple: Story<{}> = () => {
  const [visible, setVisible] = useState(true)
  return (
    <Flex>
      <Button onClick={() => setVisible(true)}>Show Me!</Button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        Some Text
      </Modal>
    </Flex>
  )
}
Simple.args = {}

export const Extended: Story<{}> = () => {
  const [visible, setVisible] = useState(true)
  return (
    <Flex>
      <Button onClick={() => setVisible(true)}>Show Me!</Button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Modal.Header>Extended Modal</Modal.Header>
        This is an extended modal, using multiple children and premade elements
        <Card bg="primaries.4" color="surfaces.4" p={2} mt={2}>
          PSA: This is pretty damn cool.
        </Card>
        <Modal.Footer justifyContent="flex-end">
          <Button onClick={() => setVisible(false)}>Okay!</Button>
        </Modal.Footer>
      </Modal>
    </Flex>
  )
}
Extended.args = {}

export const Scroll: Story<{}> = () => {
  const [visible, setVisible] = useState(true)
  return (
    <Flex>
      <Button onClick={() => setVisible(true)}>Show Me!</Button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Modal.Header>Magus</Modal.Header>
        A human confronted by two orcs draws his rapier and, as he does, violet
        runes illuminate the air around the weapon. One of the orcs rushes
        towards the man, swinging its weapon wildly. As the man parries the
        orc’s reckless attacks, he delivers a riposte that causes the air around
        the orc to burst into green flames. Seeing its ally sent sprawling to
        the ground, the second orc becomes decidedly less enthusiastic about the
        fight.
        <br />
        A dwarf looks down from the mountain peak she calls home and sees the
        rampant destruction of the woods she has sworn to protect. As she
        approaches the hunting encampment responsible for the fire, she calls
        her woodland allies to her side and her skin hardens to resemble bark.
        <br />
        Looking over ancient hieroglyphs, a saurian frantically searches for
        details of a ritual that will fortify the mystic seal that protects his
        ancestral home. The impossibly heavy doors swing open behind him and he
        turns to face the temple’s guardians as his sword erupts with flames.
        <br />
        Magi are mystical warriors who blend martial prowess with esoteric
        knowledge and spellcasting. Magi balance the pursuit of personal goals
        and relationships with their obligations to pursue the goals and ideals
        of the eldritch societies they belong to. Although their backgrounds may
        sometimes set them at odds against one another, magi are united by their
        commitment to a cause greater than themselves and a drive to master
        their magical abilities.
        <br />
        Every magus is a warrior. Magi train with arms and armor to protect what
        they hold dear, fight for what they believe in, and get themselves into
        or out of trouble. For magi, though violence may not be their preferred
        solution to a given problem, it is always a valid backup plan.
        <br />
        Every magus is a magician. Magi use their hardearned spellcasting
        abilities to explore the multiverse, empower their companions, and
        decimate their enemies. For a magus, magic is a tool that expands their
        horizons and their options.
        <br />
        All magi learn their abilities in order to fulfill their obligations to
        their eldritch society. On a mystical level, every magus’ spellcasting
        style is shaped by their eldritch society. On a personal level, every
        magus must deal with the demands and ideology of their eldritch society
        in their own way. Regardless of whether a magus embraces their eldritch
        society’s traditions and politics, no magus can deny the influence it
        has on their magic and outlook.
        <br />
        Eldritch societies are not monolithic entities, but they do have beliefs
        and goals that the majority of the magi within them believe in and fight
        for. Magi in the Arcane Order observe a tradition of honoring the
        requests and wisdom of their mentors and, subsequently, striving to
        train an apprentice to become an even greater magus then they are.
        Members of the Primordial Seal believe that the material planes are
        constantly under threat of incursion from the elemental planes and they
        must remain on guard to ensure the world’s safety. Magi in the Sylvan
        Circle seek to protect the wilderness of the world from destruction and
        defilement, although what exactly that entails varies from magus to
        magus.
        <br />
        As you create your magus character, consider the relationship your
        character has to their eldritch society. Does your character feel
        indebted to the society for the lessons it taught them? Does your
        character actively pursue the goals of their society? Has your character
        had a falling out with their society and, if so, why? While training to
        be a magus did you make any rivals? Who are they?
        <br />
        Fighting may have come naturally to you and your mentor struggled to
        impart you with the basics of spellcasting. Or maybe the spellcasting
        came easily but you lacked a talent for combat. You might have spent
        years in training with a mentor before being left to your own devices or
        you may have only met your mentor informally on a handful of momentous
        occasions. You might report back to your society contacts regularly or
        keep a safe distance from other magi.
        <br />
        You can make a magus quickly by following these suggestions. First,
        Strength or Dexterity should be your highest ability score, followed by
        Intelligence (Arcane Order, Shadow Court, Sidereal Cabal), Wisdom
        (Sylvan Circle), or Charisma (Knights Stygian, Primordial Seal) based on
        your eldritch society. Second, choose the Sage or Soldier background.
        <br />
        As an magus, you gain the following class features.
        <br />
        You start with the following equipment, in addition to the equipment
        granted by your background:
        <br />
        <Modal.Footer justifyContent="flex-end">
          <Button onClick={() => setVisible(false)}>Okay!</Button>
        </Modal.Footer>
      </Modal>
    </Flex>
  )
}
Extended.args = {}
