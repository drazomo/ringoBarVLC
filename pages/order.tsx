import React, { useEffect } from 'react'

const Order = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://web-order.flipdish.co/client/productionwlbuild/latest/static/js/main.js'
		script.charset = 'UTF-8'
		script.async = true
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<div
			style={{ minHeight: '88vh' }}
			id="flipdish-menu"
			data-full-screen-on-mobile="false"
			data-offset="100"
			data-restaurant="fd25971"
		></div>
	)
}

export default Order
