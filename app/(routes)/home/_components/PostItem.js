import Image from 'next/image'
import React from 'react'

function PostItem({post}) {

  return (
    <div>
      <div>
        <Image src={post?.createdBy.image}
        alt="user-image"
        width={35}
        height={35}
        />
      </div>
    </div>
  )
}

export default PostItem