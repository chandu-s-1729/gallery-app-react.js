// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnailDetails, updateActiveImageId, activeImageId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnailDetails

  const onClickThumbnail = () => {
    updateActiveImageId(id)
  }

  const activeClassName = activeImageId === id ? 'updated-thumbnail-image' : ''

  return (
    <li className="container">
      <button type="button" className="thumbnail-btn">
        <img
          onClick={onClickThumbnail}
          className={`thumbnail-image ${activeClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
