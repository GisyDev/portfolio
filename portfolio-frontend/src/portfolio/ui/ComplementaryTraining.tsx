import React from 'react'
import Section from '../components/Section'
import { complementary_training } from '../data/complementary-training'
import TrainingCard from '../components/ComplementaryTraining/TrainingCards'
import { sectionsNav } from '../data/nav'

const ComplementaryTraining = () => {
  return (
    <Section title={sectionsNav.complementaryTraining.text} icon={"fa-solid fa-book-open"} reference={sectionsNav.complementaryTraining.id}>
       <article className='grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {
                complementary_training.map((training) => <TrainingCard key={training.id} training={training}/> )
            }
       </article>
    </Section>
  )
}

export default ComplementaryTraining