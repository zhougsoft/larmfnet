import { useState, useEffect } from 'react'

const useSpriteAnimation = animation => {


    // const [,] = useState()


	useEffect(() => {
		if (!!animation) {


			console.log(`prep animation: ${animation}`)

            // parse and build correct animation string for key - 'wiggle', 'bounce' etc


		} else {

			console.log("no animation req'd")

            // set animation strings to ''

		}
	}, [animation])

	return {}
}

export default useSpriteAnimation
