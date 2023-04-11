import {data} from '../SpeakerData'

const IndexPage = () => {
  const {id,bio,first, last,favorite,twitterHandle,company, sessions} = data[0];
  console.log('+++data++', data)
  return (
    <div className='container speaker-list'>Hello From Pluralsight!
      <div className='col-xs-12 col-sm-12 com-md-6 col-lg-4 col-sm-12 col-xs-12'>
        <div className='card card-height p-4 mt-4'>
          <div className='speaker-image d-flex flex-grow justify-content-center align-item-center h-300'>
            <img className='contain-fit' 
              src={`/images/speaker-${id}.jpg`}
              width="300"
              alt={`${first} ${last}`}
              />
            </div>
            <div className="speaker-info">
              <div className='d-flex justify-content-between mb-3'>
                <h3 className='text-truncate w-200'>
                  {first} {last}
                </h3>
              </div>
              <div>
                <p>{bio}{company}{twitterHandle}{favorite}</p>
              </div>
            </div>
            <div className='sessionBox card h-250'>
              <span className='sesssion w-100'>
                {sessions[0].title}
              </span>
            </div>
        </div>
      </div>
    </div>
  )
};

export default IndexPage;
