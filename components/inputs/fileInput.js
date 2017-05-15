import Dropzone from 'react-dropzone'
import React from 'react'

class renderDropzoneInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = { preview: null }
    this.handleDropRejected = this.handleDropRejected.bind(this)
    this.handleFileAccepted = this.handleFileAccepted.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  componentWillMount () {
    this.setState({ preview: this.props.preview })
  }

  handleDropRejected (...args) {
    this.props.input.onChange({})
  }
  handleFileAccepted (accepted) {
    const [{ preview }] = accepted
    this.setState({ preview: preview })
    console.log(accepted)

    this.props.input.onChange(accepted)
  }
  removeItem () {
    console.log('remove item')
    this.setState({ preview: null })
    this.props.input.onChange([])
  }

  render () {
    const { preview } = this.state
    const { input, meta } = this.props
    const files = input.value

    return (
      <div>
        <Dropzone
          name={input.name}
          accept='image/*'
          onDropRejected={this.handleDropRejected}
          onDropAccepted={this.handleFileAccepted}
        >
          <div>
            Try dropping some files here, or click to select files to upload.
          </div>
        </Dropzone>
        {meta.invalid &&
          meta.error &&
          <span className='error'>{meta.error}</span>}
        {preview && <img src={preview} alt='image preview' />}
        {files &&
          Array.isArray(files) &&
          <ul>
            {files.map((file, i) => (
              <li key={i}>
                {file.name}<span onClick={this.removeItem}>REMOVE FILE</span>
              </li>
            ))}
          </ul>}
      </div>
    )
  }
}
// const renderDropzoneInput = field => {
//   const files = field.input.value

//   const handleDropRejected = (...args) => {
//     field.input.onChange({})
//   }
//   const  = accepted => {
//     const [{ preview }] = accepted
//     console.log(preview)
//     field.input.onChange(preview)
//   }
//   const removeItem = () => {
//     console.log('remove item')
//     field.input.onChange([])
//   }

//   return (
//     <div>
//       <Dropzone
//         name={field.name}
//         accept='image/*'
//         onDropRejected={handleDropRejected}
//         onDropAccepted={handleFileAccepted}
//       >
//         <div>
//           Try dropping some files here, or click to select files to upload.
//         </div>
//       </Dropzone>
//       {field.meta.invalid &&
//         field.meta.error &&
//         <span className='error'>{field.meta.error}</span>}
//       {files &&
//         Array.isArray(files) &&
//         <ul>
//           {files.map((file, i) => (
//             <li key={i}>
//               <img src='' alt='' />
//               {file.name}<span onClick={removeItem}>REMOVE FILE</span>
//             </li>
//           ))}
//         </ul>}
//     </div>
//   )
// }

export default renderDropzoneInput
