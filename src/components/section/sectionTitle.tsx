import { motion } from "framer-motion"
import { headerVariants } from "../../animations/variants/sectionHeader"

type Props = {
  title: string
}

export default function SectionTitle({ title }: Props) {
  return (
    <motion.div
      className="columns pb-6 mb-6 is-centered"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="column  is-one-third ">
        <motion.h1
          className="title is-1 has-text-centered"
          variants={headerVariants}
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  )
}
