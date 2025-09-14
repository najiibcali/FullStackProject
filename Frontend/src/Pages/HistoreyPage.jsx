import { motion } from "framer-motion"

function History() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-600 mb-8"
        >
          History of Meto Go
        </motion.h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed mb-10 text-center">
          Meto Go waa shirkad casri ah oo diiradda saarta kirada mootooyinka 
          iyo gaadiidka kale. Waxaan ku bilaabnay aragti ah in bulshada iyo 
          dalxiisayaasha laga caawiyo helitaanka gaadiid ammaan ah, 
          raqiis ah, isla markaana fudud.
        </p>

        {/* Timeline */}
        <div className="space-y-8">
          {/* 2015 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold">2015 - Aasaaska</h2>
            <p className="text-gray-600 mt-2">
              Meto Go waxa la aasaasay iyadoo ku bilaabatay adeegyo 
              yar-yar oo kireyn ah magaalada, iyadoo ujeedadu ahayd in 
              dadka laga caawiyo helitaanka gaadiid fudud oo la awoodi karo.
            </p>
          </motion.div>

          {/* 2018 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-500"
          >
            <h2 className="text-xl font-semibold">2018 - Ballaarinta adeegyada</h2>
            <p className="text-gray-600 mt-2">
              Waxaan furnay laamo cusub iyo adeegyo kala duwan sida 
              kirada mootooyinka safarka dheer iyo adeegyo shirkado ganacsi.
            </p>
          </motion.div>

          {/* 2022 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500"
          >
            <h2 className="text-xl font-semibold">2022 - Digital Transformation</h2>
            <p className="text-gray-600 mt-2">
              Meto Go waxa ay hirgelisay nidaam online ah oo macmiilku ku 
              dalban karo mooto iyo gaadiid si toos ah iyada oo aan waqtigiisa 
              lumin.
            </p>
          </motion.div>

          {/* 2025 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-purple-500"
          >
            <h2 className="text-xl font-semibold">2025 - Mustaqbalka</h2>
            <p className="text-gray-600 mt-2">
              Waxaan qorsheyneynaa in aan ballaarinno adeegyada 
              dalalka gobolka iyo caalamka, annagoo diiradda saaraya 
              amniga, hal-abuurka, iyo adeegga macmiilka.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default History
