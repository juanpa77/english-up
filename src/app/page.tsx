
import style from './lesson.module.css'

interface Lesson {
  title: string
  number: number
  content: LessonContent
}

interface LessonContent {
  sections: LessonSection[]
}

interface LessonSection {
  title: string
  items: LessonItem[]
}

interface LessonItem {
  en: string
  es: string
}

const lesson: Lesson = {
  title: 'Pronombres personales y verbo TO BE',
  number: 1,
  content: {
    sections: [
      {
        title: 'Pronombres personales',
        items: [
          { en: 'I', es: 'Yo' },
          { en: 'You', es: 'tu, usted' },
          { en: 'He', es: 'el' },
          { en: 'She', es: 'ella' },
          { en: 'it', es: 'eso, esa, ese' },
          { en: 'We', es: 'Nosotros(as)' },
          { en: 'They', es: 'Ellos(as)' },
        ]
      },
      {
        title: 'Verbo To be / ser - estar ',
        items: [
          { en: 'I am', es: 'yo soy, yo estoy' },
          { en: 'he is', es: 'el es, el esta' },
          { en: 'she is', es: 'ella es, ella esta' },
          { en: 'it is', es: 'es, esta' },
          { en: 'You are', es: 'tu eres - ustedes son, tu estas, ustedes están' },
          { en: 'They are', es: 'ellos(as) son, ellos(as) están' },
          { en: 'We are', es: 'nosotros(as) somos, nosotros(as) estamos' },
        ]
      }
    ],
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>{`Lección ${lesson.number} ${lesson.title}`}</h2>
      {
        lesson.content.sections.map(section =>
          <ul className="flex flex-col gap-4" key={section.title}>
            {section.title}
            {section.items.map(item =>
              <li className='grid grid-cols-3 border' key={item.en}>
                <div className={style.lessonItem}>{item.en}</div>
                <div> {'=>'}</div>
                <div className={style.lessonItem}>{item.es}</div>
              </li>
            )}
          </ul>
        )
      }

    </main>
  );
}
