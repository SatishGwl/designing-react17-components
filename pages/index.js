import {data} from '../SpeakerData'

const Session = (props) =>{
  const {title, room} = props  
  return(
    <div>its Session Components
      <span className='sesssion w-100'>
        {title} <strong>Room: {room}</strong>
      </span>
    </div>
  )
}

const IndexPage = () => {

  console.log('+++data++', data)
  return (
    <div className='container speaker-list'>Hello From Pluralsight!
      <div className='row'>
        {data.map(function(speaker){
            const {
              id,
              bio,
              first, 
              last,
              favorite,
              twitterHandle,
              company,
              sessions
            } = speaker
            return (
              <div key={id} className='col-xs-12 col-sm-12 com-md-6 col-lg-4 col-sm-12 col-xs-12'>
              <div className='card card-height p-4 mt-4'>
                <div className='speaker-img d-flex flex-grow justify-content-center align-items-center h-300'>
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
                    <Session title={sessions[0].title} room={sessions[0].room.name}/>
                  </div>
              </div>
            </div>
            )
        })}

      </div>
    </div>
  )
};

export default IndexPage;

