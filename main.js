import './style.css'

const block_to_insert = document.createElement( 'span' )
block_to_insert.innerHTML = new Date().getFullYear()
 
const container_block = document.getElementById( 'current-year' )
container_block.appendChild( block_to_insert )
