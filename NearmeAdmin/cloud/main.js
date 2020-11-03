var Image = require('../helpers/image');

function saveImage (base64) {
  var parseFile = new Parse.File('image.jpg', { base64: base64 });
  return parseFile.save();
}




Parse.Cloud.define('getHomePageData', (req, res) => {

  const query1 = new Parse.Query('Category')
  query1.ascending('sort')
  query1.limit(10);
  query1.doesNotExist('deletedAt')

  const query2 = new Parse.Query('Place')
  query2.equalTo('status', 'Approved')
  query2.equalTo('isFeatured', true)
  query2.doesNotExist('deletedAt')
  query2.include('category')
  query2.limit(10)
  query2.descending('createdAt')

  const query3 = new Parse.Query('Place')
  query3.equalTo('status', 'Approved')
  query3.doesNotExist('deletedAt')
  query3.include('category')
  query3.limit(10)
  query3.descending('createdAt')

  var pipeline4 = {
    match: {
      status: 'Approved',
      deletedAt: {
        '$exists': false
      }
    },
    sample: {
      size: 50
    }
  }

  const query4 = new Parse.Query('Place')

  const query5 = new Parse.Query('SliderImage')
  query5.equalTo('isActive', true)
  query5.ascending('sort')

  Parse.Promise.when(
    query1.find(),
    query2.find(),
    query3.find(),
    query4.aggregate(pipeline4),
    query5.find())
  .then((categories, featuredPlaces, newPlaces, randomPlaces, slides) => {

    const ids = randomPlaces.map(place => place.objectId)

    const query = new Parse.Query('Place')
    query.containedIn('objectId', ids)
    query.include('category')
    query.find().then(randomPlaces1 => {

      res.success({
        categories: categories,
        featuredPlaces: featuredPlaces,
        newPlaces: newPlaces,
        randomPlaces: randomPlaces1,
        slides: slides
      })

    }, error => {
      res.error(error.message)
    })

  }, function (error)  {
    res.error(error.message)
  })

})

Parse.Cloud.define('getRandomPlaces', async (req, res) => {

  try {

    const pipeline = {
      match: {
        status: 'Approved',
        deletedAt: {
          '$exists': false
        }
      },
      sample: {
        size: 50
      }
    }

    const query = new Parse.Query('Place')

    const results = await Parse.Promise.when(query.aggregate(pipeline))
    
    const ids = results.map(result => result.objectId)

    const query1 = new Parse.Query('Place')
    query1.containedIn('objectId', ids)
    query1.include('category')

    const randomPlaces = await query1.find()

    res.success(randomPlaces)

  } catch (err) {
    res.error(error.message)
  }

})

Parse.Cloud.define('isPlaceStarred', async (req, res) => {

  const user = req.user
  const placeId = req.params.placeId

  if (!user) {
    return res.error('Not Authorized')
  }

  try {

    const objPlace = new Parse.Object('Place')
    objPlace.id = placeId

    const query = new Parse.Query('Review')
    query.equalTo('place', objPlace)
    query.equalTo('user', user)

    let review = await query.first()
    const isStarred = review ? true : false
    res.success(isStarred)

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.define('isJobsListStarred', async (req, res) => {

  const user = req.user
  const jobslistId = req.params.jobslistId

  if (!user) {
    return res.error('Not Authorized')
  }

  try {

    const objJobsList = new Parse.Object('JobsList')
    objJobsList.id = jobslistId

    const query = new Parse.Query('JobsListReview')
    query.equalTo('jobslist', objJobsList)
    query.equalTo('user', user)

    let jobslistreview = await query.first()
    const isStarred = jobslistreview ? true : false
    res.success(isStarred)

  } catch (err) {
    res.error(err.message)
  }
})



Parse.Cloud.define('isPlaceLiked', async (req, res) => {

  const user = req.user
  const placeId = req.params.placeId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('Place')
    query.equalTo('likes', user)
    query.equalTo('objectId', placeId)

    const place = await query.first()
    const isLiked = place ? true : false

    res.success(isLiked)

  } catch (err) {
    res.error(err.message)
  }

})

Parse.Cloud.define('isJobsListLiked', async (req, res) => {

  const user = req.user
  const jobslistId = req.params.jobslistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('JobsList')
    query.equalTo('likes', user)
    query.equalTo('objectId', jobslistId)

    const jobslist = await query.first()
    const isLiked = jobslist ? true : false

    res.success(isLiked)

  } catch (err) {
    res.error(err.message)
  }

})
Parse.Cloud.define('findGeo',async(req,res)=>{
  
console.log(req.params.location.latitude+" "+req.params.location.longitude);

var point2 = new Parse.GeoPoint({latitude:req.params.location.latitude,longitude: req.params.location.longitude});
 const distance= 1;
const sorted = false;
const query = new Parse.Query('GeoList');
query.withinKilometers("location", point2, distance, sorted);

query.limit(10);
const placesObjects = await query.find();
    res.success(placesObjects);
})


Parse.Cloud.define('likePlace', async (req, res) => {

  const user = req.user
  const placeId = req.params.placeId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('Place')
    let place = await query.get(placeId)

    if (!place) return res.error('Record not found')
    
    const query1 = new Parse.Query('Place')
    query1.equalTo('likes', user)
    query1.equalTo('objectId', placeId)
    let isLiked = await query1.first()

    const relation = place.relation('likes')

    let response = {}

    if (isLiked) {
      place.increment('likeCount', -1)
      relation.remove(user)
      response.op = 'unlike'
    } else {
      place.increment('likeCount', 1)
      relation.add(user)
      response.op = 'like'
    }

    await place.save(null, { useMasterKey: true })

    res.success(response)

  } catch (err) {
    res.error(err.message)
  }

})


Parse.Cloud.define('likeJobsList', async (req, res) => {

  const user = req.user
  const jobslistId = req.params.jobslistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('JobsList')
    let jobslist = await query.get(jobslistId)

    if (!jobslist) return res.error('Record not found')
    
    const query1 = new Parse.Query('JobsList')
    query1.equalTo('likes', user)
    query1.equalTo('objectId', jobslistId)
    let isLiked = await query1.first()

    const relation = jobslist.relation('likes')

    let response = {}

    if (isLiked) {
      jobslist.increment('likeCount', -1)
      relation.remove(user)
      response.op = 'unlike'
    } else {
      jobslist.increment('likeCount', 1)
      relation.add(user)
      response.op = 'like'
    }

    await jobslist.save(null, { useMasterKey: true })

    res.success(response)

  } catch (err) {
    res.error(err.message)
  }

})



Parse.Cloud.define('getUsers', function (req, res) {

  var params = req.params;
  var user = req.user;

  var query = new Parse.Query(Parse.Role);
  query.equalTo('name', 'Admin');
  query.equalTo('users', user);
  query.first().then(function (adminRole) {

    if (!adminRole) {
      return res.error('Not Authorized');
    }

    // const relation = adminRole.relation('users')

    var query = new Parse.Query(Parse.User);

    if (params.filter != '') {
      query.contains('email', params.filter);
    }

    query.descending('createdAt');
    query.limit(params.limit);
    query.skip((params.page * params.limit) - params.limit);

    var queryUsers = query.find({ useMasterKey: true });
    var queryCount = query.count({ useMasterKey: true });

    return Parse.Promise.when(queryUsers, queryCount);
  }).then(function (users, total) {
    res.success({ users: users, total: total });
  }, function (error) {
    res.error(error);
  });
});

Parse.Cloud.define('createUser', function (req, res) {

  var data = req.params;
  var user = req.user;

  var query = new Parse.Query(Parse.Role);
  query.equalTo('name', 'Admin');
  query.equalTo('users', user);
  query.first().then(function (adminRole) {

    if (!adminRole) {
      return res.error('Not Authorized');
    } else {

      var user = new Parse.User();
      user.set('name', data.name);
      user.set('username', data.email);
      user.set('email', data.email);
      user.set('password', data.password);
      user.set('photo', data.photo);
      user.set('roleName', data.roleName);

      var acl = new Parse.ACL();
      acl.setPublicReadAccess(true);
      acl.setPublicWriteAccess(true);
      user.setACL(acl);

      user.signUp().then(function (objUser) {
        res.success(objUser);
      }, function (error) {
        res.error(error);
      });
    }
  }, function (error) {
    res.error(error);
  });
});

Parse.Cloud.define('updateUser', function (req, res) {

  var data = req.params;

  var user = req.user;
  cosnole.log(data+"hi"+user);

  var query = new Parse.Query(Parse.Role);
  query.equalTo('name', 'Admin');
  query.equalTo('users', user);
  query.first().then(function (adminRole) {

    if (!adminRole) {
      return res.error('Not Authorized');
    }

    var query = new Parse.Query(Parse.User);
    query.equalTo('objectId', data.id);
    return query.first({ useMasterKey: true });
  }).then(function (objUser) {

    objUser.set('name', data.name);
    objUser.set('username', data.email);
    objUser.set('email', data.email);
    objUser.set('photo', data.photo);

    if (!data.password) {
      objUser.set('password', data.password);
    }

    return objUser.save(null, { useMasterKey: true });
  }).then(function (success) {
    res.success(success);
  }, function (error) {
    res.error(error);
  });
});

Parse.Cloud.define('destroyUser', function (req, res) {

  var params = req.params;
  var user = req.user;

  var query = new Parse.Query(Parse.Role);
  query.equalTo('name', 'Admin');
  query.equalTo('users', user);
  query.first().then(function (adminRole) {

    if (!adminRole) {
      return res.error('Not Authorized');
    }

    var query = new Parse.Query(Parse.User);
    query.equalTo('objectId', params.id);
    return query.first({ useMasterKey: true });
  }).then(function (objUser) {

    if (!objUser) {
      return res.error('User not found');
    }

    return objUser.destroy({ useMasterKey: true });
  }).then(function (success) {
    res.success(success);
  }, function (error) {
    res.error(error);
  });
});

Parse.Cloud.beforeSave('Category', async (req, res) => {

  let obj = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.get('image')) return res.error('The field Image is required.')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
    obj.set('placeCount', 0)
  }

  if (obj.dirty('title') && obj.get('title')) {
    obj.set('canonical', obj.get('title').toLowerCase())
  }

  if (!obj.dirty('image')) return res.success()

  var image = obj.get('image')

  try {

    let httpResponse = await Parse.Cloud.httpRequest({ url: image.url() })
    
    let imageResizedData = await sharp(httpResponse.buffer).resize(600).toBuffer()
    let imageThumbData = await sharp(httpResponse.buffer).resize(200, 200).toBuffer()

    let file = new Parse.File('image.jpg', {
      base64: imageResizedData.toString('base64')
    })

    let thumb = new Parse.File('image.jpg', {
      base64: imageThumbData.toString('base64')
    })

    await file.save()
    await thumb.save()

    obj.set('image', file)
    obj.set('imageThumb', thumb)

    res.success()

  } catch (err) {
    res.error('Unable to process image')
  }

})

Parse.Cloud.beforeSave('Jobs', async (req, res) => {

  let obj = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.get('image')) return res.error('The field Image is required.')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
    obj.set('jobslistCount', 0)
  }

  if (obj.dirty('title') && obj.get('title')) {
    obj.set('canonical', obj.get('title').toLowerCase())
  }

  if (!obj.dirty('image')) return res.success()

  var image = obj.get('image')

  try {

    let httpResponse = await Parse.Cloud.httpRequest({ url: image.url() })
    
    let imageResizedData = await sharp(httpResponse.buffer).resize(600).toBuffer()
    let imageThumbData = await sharp(httpResponse.buffer).resize(200, 200).toBuffer()

    let file = new Parse.File('image.jpg', {
      base64: imageResizedData.toString('base64')
    })

    let thumb = new Parse.File('image.jpg', {
      base64: imageThumbData.toString('base64')
    })

    await file.save()
    await thumb.save()

    obj.set('image', file)
    obj.set('imageThumb', thumb)

    res.success()

  } catch (err) {
    res.error('Unable to process image')
  }

})

Parse.Cloud.beforeSave('Sale', async (req, res) => {

  let obj = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.get('image')) return res.error('The field Image is required.')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
    obj.set('salelistCount', 0)
  }

  if (obj.dirty('title') && obj.get('title')) {
    obj.set('canonical', obj.get('title').toLowerCase())
  }

  if (!obj.dirty('image')) return res.success()

  var image = obj.get('image')

  try {

    let httpResponse = await Parse.Cloud.httpRequest({ url: image.url() })
    
    let imageResizedData = await sharp(httpResponse.buffer).resize(600).toBuffer()
    let imageThumbData = await sharp(httpResponse.buffer).resize(200, 200).toBuffer()

    let file = new Parse.File('image.jpg', {
      base64: imageResizedData.toString('base64')
    })

    let thumb = new Parse.File('image.jpg', {
      base64: imageThumbData.toString('base64')
    })

    await file.save()
    await thumb.save()

    obj.set('image', file)
    obj.set('imageThumb', thumb)

    res.success()

  } catch (err) {
    res.error('Unable to process image')
  }

})


Parse.Cloud.beforeDelete('Category', async (req, res) => {
  const obj = req.object

  try {

    const query = new Parse.Query('Place')
    query.equalTo('category', obj)
    const result = await query.first()

    if (result) return res.error('Can\'t delete category if it still has places.')

    res.success()

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.beforeDelete('Jobs', async (req, res) => {
  const obj = req.object

  try {

    const query = new Parse.Query('JobsList')
    query.equalTo('jobs', obj)
    const result = await query.first()

    if (result) return res.error('Can\'t delete Jobs if it still has places.')

    res.success()

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.beforeDelete('Sale', async (req, res) => {
  const obj = req.object

  try {

    const query = new Parse.Query('SaleList')
    query.equalTo('sale', obj)
    const result = await query.first()

    if (result) return res.error('Can\'t delete Jobs if it still has places.')

    res.success()

  } catch (err) {
    res.error(err.message)
  }
})


Parse.Cloud.beforeSave('Place', async (req, res) => {

  let place = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (place.dirty('title') && place.get('title')) {
    place.set('canonical', place.get('title').toLowerCase())
  }

  if (!place.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    place.setACL(acl)
    place.set('status', 'Pending')
    place.set('user', user)
  }

  if (!place.dirty('image') && !place.dirty('imageTwo') &&
   !place.dirty('imageThree') && !place.dirty('imageFour')) {
    return res.success();
  }

  let promises = [];

  if (place.get('image') && place.dirty('image')) {

    let url = place.get('image').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      place.set('image', savedFile)
    })

    promises.push(promise)

    let promiseThumb = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(320, 320).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      place.set('imageThumb', savedFile)
    })

    promises.push(promiseThumb)
  }

  if (place.get('imageTwo') && place.dirty('imageTwo')) {
    let url = place.get('imageTwo').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      place.set('imageTwo', savedFile)
    })
    promises.push(promise)
  }

  if (place.get('imageThree') && place.dirty('imageThree')) {
    let url = place.get('imageThree').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      place.set('imageThree', savedFile)
    })
    promises.push(promise)
  }

  if (place.get('imageFour') && place.dirty('imageFour')) {
    let url = place.get('imageFour').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      place.set('imageFour', savedFile)
    })
    promises.push(promise)
  }

  try {
    await Parse.Promise.when(promises)
    res.success()
  } catch (err) {
    res.error(err.message)
  }
});

Parse.Cloud.beforeSave('JobsList', async (req, res) => {

  let jobslist = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (jobslist.dirty('title') && jobslist.get('title')) {
    jobslist.set('canonical', jobslist.get('title').toLowerCase())
  }

  if (!jobslist.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    jobslist.setACL(acl)
    jobslist.set('status', 'Pending')
    jobslist.set('user', user)
  }

  if (!jobslist.dirty('image') && !jobslist.dirty('imageTwo') &&
   !jobslist.dirty('imageThree') && !jobslist.dirty('imageFour')) {
    return res.success();
  }

  let promises = [];

  if (jobslist.get('image') && jobslist.dirty('image')) {

    let url = jobslist.get('image').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      jobslist.set('image', savedFile)
    })

    promises.push(promise)

    let promiseThumb = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(320, 320).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      jobslist.set('imageThumb', savedFile)
    })

    promises.push(promiseThumb)
  }

  if (jobslist.get('imageTwo') && jobslist.dirty('imageTwo')) {
    let url = jobslist.get('imageTwo').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      jobslist.set('imageTwo', savedFile)
    })
    promises.push(promise)
  }

  if (jobslist.get('imageThree') && jobslist.dirty('imageThree')) {
    let url = jobslist.get('imageThree').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      jobslist.set('imageThree', savedFile)
    })
    promises.push(promise)
  }

  if (jobslist.get('imageFour') && jobslist.dirty('imageFour')) {
    let url = jobslist.get('imageFour').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      jobslist.set('imageFour', savedFile)
    })
    promises.push(promise)
  }

  try {
    await Parse.Promise.when(promises)
    res.success()
  } catch (err) {
    res.error(err.message)
  }
});


Parse.Cloud.afterSave('Place', async (req, res) => {

  if (!req.object.existed()) {
    const attrs = req.object.attributes
    const category = attrs.category
    category.increment('placeCount')
    category.save(null, { useMasterKey: true })
  }

})


Parse.Cloud.afterSave('JobsList', async (req, res) => {

  if (!req.object.existed()) {
    const attrs = req.object.attributes
    const jobs = attrs.jobs
    jobs.increment('jobslistCount')
    jobs.save(null, { useMasterKey: true })
  }

})

Parse.Cloud.afterDelete('Place', async (req, res) => {

  const obj = req.object
  const attrs = obj.attributes

  try {

    const category = attrs.category
    category.increment('placeCount', -1)
    category.save(null, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }

  try {

    const query = new Parse.Query('Review')
    query.equalTo('place', obj)
    const count = await query.count()
    query.limit(count)
    const results = await query.find()
    const op = await Parse.Object.destroyAll(results, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }
  
})

Parse.Cloud.afterDelete('JobsList', async (req, res) => {

  const obj = req.object
  const attrs = obj.attributes

  try {

    const jobs = attrs.jobs
    jobs.increment('jobslistCount', -1)
    jobs.save(null, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }

  try {

    const query = new Parse.Query('JobsListReview')
    query.equalTo('jobslist', obj)
    const count = await query.count()
    query.limit(count)
    const results = await query.find()
    const op = await Parse.Object.destroyAll(results, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }
  
})



Parse.Cloud.beforeSave('Review', async (req, res) => {

  let obj = req.object
  let user = req.user
  const attrs = obj.attributes

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    obj.setACL(acl)
    obj.set('user', user)
    obj.set('isInappropriate', false)
  } else {
    res.success();
  }

  try {

    let query = new Parse.Query('Review')
    query.equalTo('user', user)
    query.equalTo('place', attrs.place)

    let exists = await query.first()

    if (exists) {
      return res.error(5000, 'You already write a review for this place')
    } else if (obj.get('rating') < 1) {
      return res.error(5001, 'You cannot give less than one star')
    } else if (obj.get('rating') > 5) {
      return res.error(5002, 'You cannot give more than five stars')
    } else {
      res.success()
    }

  } catch (err) {
    res.error(err.message)
  }

});


Parse.Cloud.beforeSave('JobsListReview', async (req, res) => {

  let obj = req.object
  let user = req.user
  const attrs = obj.attributes

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    obj.setACL(acl)
    obj.set('user', user)
    obj.set('isInappropriate', false)
  } else {
    res.success();
  }

  try {

    let query = new Parse.Query('JobsListReview')
    query.equalTo('user', user)
    query.equalTo('jobslist', attrs.jobslist)

    let exists = await query.first()

    if (exists) {
      return res.error(5000, 'You already write a review for this jobslist')
    } else if (obj.get('rating') < 1) {
      return res.error(5001, 'You cannot give less than one star')
    } else if (obj.get('rating') > 5) {
      return res.error(5002, 'You cannot give more than five stars')
    } else {
      res.success()
    }

  } catch (err) {
    res.error(err.message)
  }

});

Parse.Cloud.afterSave('Review', async (req) => {

  const attrs = req.object.attributes

  try {

    let query = new Parse.Query('Place')
    let place = await query.get(attrs.place.id)

    if (place) {
      place.increment('ratingCount')
      place.increment('ratingTotal', attrs.rating)
      place.save(null, { useMasterKey: true })
    }

  } catch (err) {
    console.warn(err.message)
  }

})

Parse.Cloud.afterSave('JobsListReview', async (req) => {

  const attrs = req.object.attributes

  try {

    let query = new Parse.Query('JobsList')
    let jobslist = await query.get(attrs.jobslist.id)

    if (jobslist) {
      jobslist.increment('ratingCount')
      jobslist.increment('ratingTotal', attrs.rating)
      jobslist.save(null, { useMasterKey: true })
    }

  } catch (err) {
    console.warn(err.message)
  }

})

//jobslist start
Parse.Cloud.define('isSaleListStarred', async (req, res) => {

  const user = req.user
  const salelistId = req.params.salelistId

  if (!user) {
    return res.error('Not Authorized')
  }

  try {

    const objSaleList = new Parse.Object('SaleList')
    objSaleList.id = salelistId

    const query = new Parse.Query('SaleListReview')
    query.equalTo('salelist', objSaleList)
    query.equalTo('user', user)

    let salelistreview = await query.first()
    const isStarred = salelistreview ? true : false
    res.success(isStarred)

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.define('isSaleListLiked', async (req, res) => {

  const user = req.user
  const salelistId = req.params.salelistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('SaleList')
    query.equalTo('likes', user)
    query.equalTo('objectId', salelistId)

    const salelist = await query.first()
    const isLiked = salelist ? true : false

    res.success(isLiked)

  } catch (err) {
    res.error(err.message)
  }

})

Parse.Cloud.define('likeSaleList', async (req, res) => {

  const user = req.user
  const salelistId = req.params.salelistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('SaleList')
    let salelist = await query.get(salelistId)

    if (!salelist) return res.error('Record not found')
    
    const query1 = new Parse.Query('SaleList')
    query1.equalTo('likes', user)
    query1.equalTo('objectId', salelistId)
    let isLiked = await query1.first()

    const relation = salelist.relation('likes')

    let response = {}

    if (isLiked) {
      salelist.increment('likeCount', -1)
      relation.remove(user)
      response.op = 'unlike'
    } else {
      salelist.increment('likeCount', 1)
      relation.add(user)
      response.op = 'like'
    }

    await salelist.save(null, { useMasterKey: true })

    res.success(response)

  } catch (err) {
    res.error(err.message)
  }

})


Parse.Cloud.beforeSave('SaleList', async (req, res) => {

  let salelist = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (salelist.dirty('title') && salelist.get('title')) {
    salelist.set('canonical', salelist.get('title').toLowerCase())
  }

  if (!salelist.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    salelist.setACL(acl)
    salelist.set('status', 'Pending')
    salelist.set('user', user)
  }

  if (!salelist.dirty('image') && !salelist.dirty('imageTwo') &&
   !salelist.dirty('imageThree') && !salelist.dirty('imageFour')) {
    return res.success();
  }

  let promises = [];

  if (salelist.get('image') && salelist.dirty('image')) {

    let url = salelist.get('image').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      salelist.set('image', savedFile)
    })

    promises.push(promise)

    let promiseThumb = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(320, 320).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      salelist.set('imageThumb', savedFile)
    })

    promises.push(promiseThumb)
  }

  if (salelist.get('imageTwo') && salelist.dirty('imageTwo')) {
    let url = salelist.get('imageTwo').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      salelist.set('imageTwo', savedFile)
    })
    promises.push(promise)
  }

  if (salelist.get('imageThree') && salelist.dirty('imageThree')) {
    let url = salelist.get('imageThree').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      salelist.set('imageThree', savedFile)
    })
    promises.push(promise)
  }

  if (salelist.get('imageFour') && salelist.dirty('imageFour')) {
    let url = salelist.get('imageFour').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      salelist.set('imageFour', savedFile)
    })
    promises.push(promise)
  }

  try {
    await Parse.Promise.when(promises)
    res.success()
  } catch (err) {
    res.error(err.message)
  }
});


Parse.Cloud.afterDelete('SaleList', async (req, res) => {

  const obj = req.object
  const attrs = obj.attributes

  try {

    const sale = attrs.sale
    sale.increment('salelistCount', -1)
    sale.save(null, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }

  try {

    const query = new Parse.Query('SaleListReview')
    query.equalTo('salelist', obj)
    const count = await query.count()
    query.limit(count)
    const results = await query.find()
    const op = await Parse.Object.destroyAll(results, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }
  
})



Parse.Cloud.beforeSave('SaleListReview', async (req, res) => {

  let obj = req.object
  let user = req.user
  const attrs = obj.attributes

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    obj.setACL(acl)
    obj.set('user', user)
    obj.set('isInappropriate', false)
  } else {
    res.success();
  }

  try {

    let query = new Parse.Query('SaleListReview')
    query.equalTo('user', user)
    query.equalTo('salelist', attrs.salelist)

    let exists = await query.first()

    if (exists) {
      return res.error(5000, 'You already write a review for this salelist')
    } else if (obj.get('rating') < 1) {
      return res.error(5001, 'You cannot give less than one star')
    } else if (obj.get('rating') > 5) {
      return res.error(5002, 'You cannot give more than five stars')
    } else {
      res.success()
    }

  } catch (err) {
    res.error(err.message)
  }

});


Parse.Cloud.afterSave('SaleListReview', async (req) => {

  const attrs = req.object.attributes

  try {

    let query = new Parse.Query('SaleList')
    let salelist = await query.get(attrs.salelist.id)

    if (salelist) {
      salelist.increment('ratingCount')
      salelist.increment('ratingTotal', attrs.rating)
      salelist.save(null, { useMasterKey: true })
    }

  } catch (err) {
    console.warn(err.message)
  }

})


//end jobslist

//RentList start
Parse.Cloud.beforeSave('Rent', async (req, res) => {

  let obj = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.get('image')) return res.error('The field Image is required.')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
    obj.set('rentlistCount', 0)
  }

  if (obj.dirty('title') && obj.get('title')) {
    obj.set('canonical', obj.get('title').toLowerCase())
  }

  if (!obj.dirty('image')) return res.success()

  var image = obj.get('image')

  try {

    let httpResponse = await Parse.Cloud.httpRequest({ url: image.url() })
    
    let imageResizedData = await sharp(httpResponse.buffer).resize(600).toBuffer()
    let imageThumbData = await sharp(httpResponse.buffer).resize(200, 200).toBuffer()

    let file = new Parse.File('image.jpg', {
      base64: imageResizedData.toString('base64')
    })

    let thumb = new Parse.File('image.jpg', {
      base64: imageThumbData.toString('base64')
    })

    await file.save()
    await thumb.save()

    obj.set('image', file)
    obj.set('imageThumb', thumb)

    res.success()

  } catch (err) {
    res.error('Unable to process image')
  }

})

Parse.Cloud.beforeDelete('Rent', async (req, res) => {
  const obj = req.object

  try {

    const query = new Parse.Query('RentList')
    query.equalTo('jobs', obj)
    const result = await query.first()

    if (result) return res.error('Can\'t delete Jobs if it still has places.')

    res.success()

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.afterSave('RentList', async (req, res) => {

  if (!req.object.existed()) {
    const attrs = req.object.attributes
    const rent = attrs.rent
    rent.increment('rentlistCount')
    rent.save(null, { useMasterKey: true })
  }

})

Parse.Cloud.define('isRentListStarred', async (req, res) => {

  const user = req.user
  const rentlistId = req.params.rentlistId

  if (!user) {
    return res.error('Not Authorized')
  }

  try {

    const objRentList = new Parse.Object('RentList')
    objRentList.id = rentlistId

    const query = new Parse.Query('RentListReview')
    query.equalTo('rentlist', objRentList)
    query.equalTo('user', user)

    let rentlistreview = await query.first()
    const isStarred = rentlistreview ? true : false
    res.success(isStarred)

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.define('isRentListLiked', async (req, res) => {

  const user = req.user
  const rentlistId = req.params.rentlistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('RentList')
    query.equalTo('likes', user)
    query.equalTo('objectId', rentlistId)

    const rentlist = await query.first()
    const isLiked = rentlist ? true : false

    res.success(isLiked)

  } catch (err) {
    res.error(err.message)
  }

})

Parse.Cloud.define('likeRentList', async (req, res) => {

  const user = req.user
  const rentlistId = req.params.rentlistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('RentList')
    let rentlist = await query.get(rentlistId)

    if (!rentlist) return res.error('Record not found')
    
    const query1 = new Parse.Query('RentList')
    query1.equalTo('likes', user)
    query1.equalTo('objectId', rentlistId)
    let isLiked = await query1.first()

    const relation = rentlist.relation('likes')

    let response = {}

    if (isLiked) {
      rentlist.increment('likeCount', -1)
      relation.remove(user)
      response.op = 'unlike'
    } else {
      rentlist.increment('likeCount', 1)
      relation.add(user)
      response.op = 'like'
    }

    await rentlist.save(null, { useMasterKey: true })

    res.success(response)

  } catch (err) {
    res.error(err.message)
  }

})


Parse.Cloud.beforeSave('RentList', async (req, res) => {

  let rentlist = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (rentlist.dirty('title') && rentlist.get('title')) {
    rentlist.set('canonical', rentlist.get('title').toLowerCase())
  }

  if (!rentlist.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    rentlist.setACL(acl)
    rentlist.set('status', 'Pending')
    rentlist.set('user', user)
  }

  if (!rentlist.dirty('image') && !rentlist.dirty('imageTwo') &&
   !rentlist.dirty('imageThree') && !rentlist.dirty('imageFour')) {
    return res.success();
  }

  let promises = [];

  if (rentlist.get('image') && rentlist.dirty('image')) {

    let url = rentlist.get('image').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      rentlist.set('image', savedFile)
    })

    promises.push(promise)

    let promiseThumb = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(320, 320).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      rentlist.set('imageThumb', savedFile)
    })

    promises.push(promiseThumb)
  }

  if (rentlist.get('imageTwo') && rentlist.dirty('imageTwo')) {
    let url = rentlist.get('imageTwo').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      rentlist.set('imageTwo', savedFile)
    })
    promises.push(promise)
  }

  if (rentlist.get('imageThree') && rentlist.dirty('imageThree')) {
    let url = rentlist.get('imageThree').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      rentlist.set('imageThree', savedFile)
    })
    promises.push(promise)
  }

  if (rentlist.get('imageFour') && rentlist.dirty('imageFour')) {
    let url = rentlist.get('imageFour').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      rentlist.set('imageFour', savedFile)
    })
    promises.push(promise)
  }

  try {
    await Parse.Promise.when(promises)
    res.success()
  } catch (err) {
    res.error(err.message)
  }
});


Parse.Cloud.afterDelete('RentList', async (req, res) => {

  const obj = req.object
  const attrs = obj.attributes

  try {

    const rent = attrs.rent
    rent.increment('rentlistCount', -1)
    rent.save(null, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }

  try {

    const query = new Parse.Query('RentListReview')
    query.equalTo('rentlist', obj)
    const count = await query.count()
    query.limit(count)
    const results = await query.find()
    const op = await Parse.Object.destroyAll(results, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }
  
})



Parse.Cloud.beforeSave('RentListReview', async (req, res) => {

  let obj = req.object
  let user = req.user
  const attrs = obj.attributes

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    obj.setACL(acl)
    obj.set('user', user)
    obj.set('isInappropriate', false)
  } else {
    res.success();
  }

  try {

    let query = new Parse.Query('RentListReview')
    query.equalTo('user', user)
    query.equalTo('rentlist', attrs.rentlist)

    let exists = await query.first()

    if (exists) {
      return res.error(5000, 'You already write a review for this rentlist')
    } else if (obj.get('rating') < 1) {
      return res.error(5001, 'You cannot give less than one star')
    } else if (obj.get('rating') > 5) {
      return res.error(5002, 'You cannot give more than five stars')
    } else {
      res.success()
    }

  } catch (err) {
    res.error(err.message)
  }

});


Parse.Cloud.afterSave('RentListReview', async (req) => {

  const attrs = req.object.attributes

  try {

    let query = new Parse.Query('RentList')
    let rentlist = await query.get(attrs.rentlist.id)

    if (rentlist) {
      rentlist.increment('ratingCount')
      rentlist.increment('ratingTotal', attrs.rating)
      rentlist.save(null, { useMasterKey: true })
    }

  } catch (err) {
    console.warn(err.message)
  }

})


//end jobslist

//end rentlist
//Cityupdate start here

Parse.Cloud.beforeSave('CityUpdate', async (req, res) => {

  let obj = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.get('image')) return res.error('The field Image is required.')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
    obj.set('updatelistCount', 0)
  }

  if (obj.dirty('title') && obj.get('title')) {
    obj.set('canonical', obj.get('title').toLowerCase())
  }

  if (!obj.dirty('image')) return res.success()

  var image = obj.get('image')

  try {

    let httpResponse = await Parse.Cloud.httpRequest({ url: image.url() })
    
    let imageResizedData = await sharp(httpResponse.buffer).resize(600).toBuffer()
    let imageThumbData = await sharp(httpResponse.buffer).resize(200, 200).toBuffer()

    let file = new Parse.File('image.jpg', {
      base64: imageResizedData.toString('base64')
    })

    let thumb = new Parse.File('image.jpg', {
      base64: imageThumbData.toString('base64')
    })

    await file.save()
    await thumb.save()

    obj.set('image', file)
    obj.set('imageThumb', thumb)

    res.success()

  } catch (err) {
    res.error('Unable to process image')
  }

})

Parse.Cloud.beforeDelete('CityUpdate', async (req, res) => {
  const obj = req.object

  try {

    const query = new Parse.Query('UpdateList')
    query.equalTo('jobs', obj)
    const result = await query.first()

    if (result) return res.error('Can\'t delete Jobs if it still has places.')

    res.success()

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.afterSave('UpdateList', async (req, res) => {

  if (!req.object.existed()) {
    const attrs = req.object.attributes
    const cityupdate = attrs.cityupdate
    cityupdate.increment('updatelistCount')
    cityupdate.save(null, { useMasterKey: true })
  }

})

Parse.Cloud.define('isUpdateListStarred', async (req, res) => {

  const user = req.user
  const updatelistId = req.params.updatelistId

  if (!user) {
    return res.error('Not Authorized')
  }

  try {

    const objUpdateList = new Parse.Object('UpdateList')
    objUpdateList.id = updatelistId

    const query = new Parse.Query('UpdateListReview')
    query.equalTo('updatelist', objUpdateList)
    query.equalTo('user', user)

    let updatelistreview = await query.first()
    const isStarred = updatelistreview ? true : false
    res.success(isStarred)

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.define('isUpdateListLiked', async (req, res) => {

  const user = req.user
  const updatelistId = req.params.updatelistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('UpdateList')
    query.equalTo('likes', user)
    query.equalTo('objectId', updatelistId)

    const updatelist = await query.first()
    const isLiked = updatelist ? true : false

    res.success(isLiked)

  } catch (err) {
    res.error(err.message)
  }

})

Parse.Cloud.define('likeUpdateList', async (req, res) => {

  const user = req.user
  const updatelistId = req.params.updatelistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('UpdateList')
    let updatelist = await query.get(updatelistId)

    if (!updatelist) return res.error('Record not found')
    
    const query1 = new Parse.Query('UpdateList')
    query1.equalTo('likes', user)
    query1.equalTo('objectId', updatelistId)
    let isLiked = await query1.first()

    const relation = updatelist.relation('likes')

    let response = {}

    if (isLiked) {
      updatelist.increment('likeCount', -1)
      relation.remove(user)
      response.op = 'unlike'
    } else {
      updatelist.increment('likeCount', 1)
      relation.add(user)
      response.op = 'like'
    }

    await updatelist.save(null, { useMasterKey: true })

    res.success(response)

  } catch (err) {
    res.error(err.message)
  }

})


Parse.Cloud.beforeSave('UpdateList', async (req, res) => {

  let updatelist = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (updatelist.dirty('title') && updatelist.get('title')) {
    updatelist.set('canonical', updatelist.get('title').toLowerCase())
  }

  if (!updatelist.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    updatelist.setACL(acl)
    updatelist.set('status', 'Pending')
    updatelist.set('user', user)
  }

  if (!updatelist.dirty('image') && !updatelist.dirty('imageTwo') &&
   !updatelist.dirty('imageThree') && !updatelist.dirty('imageFour')) {
    return res.success();
  }

  let promises = [];

  if (updatelist.get('image') && updatelist.dirty('image')) {

    let url = updatelist.get('image').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      updatelist.set('image', savedFile)
    })

    promises.push(promise)

    let promiseThumb = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(320, 320).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      updatelist.set('imageThumb', savedFile)
    })

    promises.push(promiseThumb)
  }

  if (updatelist.get('imageTwo') && updatelist.dirty('imageTwo')) {
    let url = updatelist.get('imageTwo').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      updatelist.set('imageTwo', savedFile)
    })
    promises.push(promise)
  }

  if (updatelist.get('imageThree') && updatelist.dirty('imageThree')) {
    let url = updatelist.get('imageThree').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      updatelist.set('imageThree', savedFile)
    })
    promises.push(promise)
  }

  if (updatelist.get('imageFour') && updatelist.dirty('imageFour')) {
    let url = updatelist.get('imageFour').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      updatelist.set('imageFour', savedFile)
    })
    promises.push(promise)
  }

  try {
    await Parse.Promise.when(promises)
    res.success()
  } catch (err) {
    res.error(err.message)
  }
});


Parse.Cloud.afterDelete('UpdateList', async (req, res) => {

  const obj = req.object
  const attrs = obj.attributes

  try {

    const cityupdate = attrs.cityupdate
    cityupdate.increment('updatelistCount', -1)
    cityupdate.save(null, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }

  try {

    const query = new Parse.Query('UpdateListReview')
    query.equalTo('updatelist', obj)
    const count = await query.count()
    query.limit(count)
    const results = await query.find()
    const op = await Parse.Object.destroyAll(results, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }
  
})



Parse.Cloud.beforeSave('UpdateListReview', async (req, res) => {

  let obj = req.object
  let user = req.user
  const attrs = obj.attributes

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    obj.setACL(acl)
    obj.set('user', user)
    obj.set('isInappropriate', false)
  } else {
    res.success();
  }

  try {

    let query = new Parse.Query('UpdateListReview')
    query.equalTo('user', user)
    query.equalTo('updatelist', attrs.updatelist)

    let exists = await query.first()

    if (exists) {
      return res.error(5000, 'You already write a review for this updatelist')
    } else if (obj.get('rating') < 1) {
      return res.error(5001, 'You cannot give less than one star')
    } else if (obj.get('rating') > 5) {
      return res.error(5002, 'You cannot give more than five stars')
    } else {
      res.success()
    }

  } catch (err) {
    res.error(err.message)
  }

});


Parse.Cloud.afterSave('UpdateListReview', async (req) => {

  const attrs = req.object.attributes

  try {

    let query = new Parse.Query('UpdateList')
    let updatelist = await query.get(attrs.updatelist.id)

    if (updatelist) {
      updatelist.increment('ratingCount')
      updatelist.increment('ratingTotal', attrs.rating)
      updatelist.save(null, { useMasterKey: true })
    }

  } catch (err) {
    console.warn(err.message)
  }

})



//end here
//homeservice start

Parse.Cloud.beforeSave('HomeService', async (req, res) => {

  let obj = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.get('image')) return res.error('The field Image is required.')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
    obj.set('homeservicelistCount', 0)
  }

  if (obj.dirty('title') && obj.get('title')) {
    obj.set('canonical', obj.get('title').toLowerCase())
  }

  if (!obj.dirty('image')) return res.success()

  var image = obj.get('image')

  try {

    let httpResponse = await Parse.Cloud.httpRequest({ url: image.url() })
    
    let imageResizedData = await sharp(httpResponse.buffer).resize(600).toBuffer()
    let imageThumbData = await sharp(httpResponse.buffer).resize(200, 200).toBuffer()

    let file = new Parse.File('image.jpg', {
      base64: imageResizedData.toString('base64')
    })

    let thumb = new Parse.File('image.jpg', {
      base64: imageThumbData.toString('base64')
    })

    await file.save()
    await thumb.save()

    obj.set('image', file)
    obj.set('imageThumb', thumb)

    res.success()

  } catch (err) {
    res.error('Unable to process image')
  }

})

Parse.Cloud.beforeDelete('HomeService', async (req, res) => {
  const obj = req.object

  try {

    const query = new Parse.Query('HomeServiceList')
    query.equalTo('jobs', obj)
    const result = await query.first()

    if (result) return res.error('Can\'t delete Jobs if it still has places.')

    res.success()

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.afterSave('HomeServiceList', async (req, res) => {

  if (!req.object.existed()) {
    const attrs = req.object.attributes
    const homeservice = attrs.homeservice
    homeservice.increment('homeservicelistCount')
    homeservice.save(null, { useMasterKey: true })
  }

})

Parse.Cloud.define('isHomeServiceListStarred', async (req, res) => {

  const user = req.user
  const homeservicelistId = req.params.homeservicelistId

  if (!user) {
    return res.error('Not Authorized')
  }

  try {

    const objHomeServiceList = new Parse.Object('HomeServiceList')
    objHomeServiceList.id = homeservicelistId

    const query = new Parse.Query('HomeServiceListReview')
    query.equalTo('homeservicelist', objHomeServiceList)
    query.equalTo('user', user)

    let homeservicelistreview = await query.first()
    const isStarred = homeservicelistreview ? true : false
    res.success(isStarred)

  } catch (err) {
    res.error(err.message)
  }
})

Parse.Cloud.define('isHomeServiceListLiked', async (req, res) => {

  const user = req.user
  const homeservicelistId = req.params.homeservicelistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('HomeServiceList')
    query.equalTo('likes', user)
    query.equalTo('objectId', homeservicelistId)

    const homeservicelist = await query.first()
    const isLiked = homeservicelist ? true : false

    res.success(isLiked)

  } catch (err) {
    res.error(err.message)
  }

})

Parse.Cloud.define('likeHomeServiceList', async (req, res) => {

  const user = req.user
  const homeservicelistId = req.params.homeservicelistId

  if (!user) return res.error('Not Authorized')

  try {

    const query = new Parse.Query('HomeServiceList')
    let homeservicelist = await query.get(homeservicelistId)

    if (!homeservicelist) return res.error('Record not found')
    
    const query1 = new Parse.Query('HomeServiceList')
    query1.equalTo('likes', user)
    query1.equalTo('objectId', homeservicelistId)
    let isLiked = await query1.first()

    const relation = homeservicelist.relation('likes')

    let response = {}

    if (isLiked) {
      homeservicelist.increment('likeCount', -1)
      relation.remove(user)
      response.op = 'unlike'
    } else {
      homeservicelist.increment('likeCount', 1)
      relation.add(user)
      response.op = 'like'
    }

    await homeservicelist.save(null, { useMasterKey: true })

    res.success(response)

  } catch (err) {
    res.error(err.message)
  }

})


Parse.Cloud.beforeSave('HomeServiceList', async (req, res) => {

  let homeservicelist = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (homeservicelist.dirty('title') && homeservicelist.get('title')) {
    homeservicelist.set('canonical', homeservicelist.get('title').toLowerCase())
  }

  if (!homeservicelist.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    homeservicelist.setACL(acl)
    homeservicelist.set('status', 'Pending')
    homeservicelist.set('user', user)
  }

  if (!homeservicelist.dirty('image') && !homeservicelist.dirty('imageTwo') &&
   !homeservicelist.dirty('imageThree') && !homeservicelist.dirty('imageFour')) {
    return res.success();
  }

  let promises = [];

  if (homeservicelist.get('image') && homeservicelist.dirty('image')) {

    let url = homeservicelist.get('image').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      homeservicelist.set('image', savedFile)
    })

    promises.push(promise)

    let promiseThumb = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(320, 320).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      homeservicelist.set('imageThumb', savedFile)
    })

    promises.push(promiseThumb)
  }

  if (homeservicelist.get('imageTwo') && homeservicelist.dirty('imageTwo')) {
    let url = homeservicelist.get('imageTwo').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      homeservicelist.set('imageTwo', savedFile)
    })
    promises.push(promise)
  }

  if (homeservicelist.get('imageThree') && homeservicelist.dirty('imageThree')) {
    let url = homeservicelist.get('imageThree').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      homeservicelist.set('imageThree', savedFile)
    })
    promises.push(promise)
  }

  if (homeservicelist.get('imageFour') && homeservicelist.dirty('imageFour')) {
    let url = homeservicelist.get('imageFour').url()

    let promise = Parse.Cloud.httpRequest({ url: url }).then(httpResponse => {
      return sharp(httpResponse.buffer).resize(640).toBuffer()
    }).then(imageData => {
      return saveImage(imageData.toString('base64'))
    }).then(savedFile => {
      homeservicelist.set('imageFour', savedFile)
    })
    promises.push(promise)
  }

  try {
    await Parse.Promise.when(promises)
    res.success()
  } catch (err) {
    res.error(err.message)
  }
});


Parse.Cloud.afterDelete('HomeServiceList', async (req, res) => {

  const obj = req.object
  const attrs = obj.attributes

  try {

    const homeservice = attrs.homeservice
    homeservice.increment('homeservicelistCount', -1)
    homeservice.save(null, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }

  try {

    const query = new Parse.Query('HomeServiceListReview')
    query.equalTo('homeservicelist', obj)
    const count = await query.count()
    query.limit(count)
    const results = await query.find()
    const op = await Parse.Object.destroyAll(results, { useMasterKey: true })

  } catch (err) {
    console.warn(err.message)
  }
  
})



Parse.Cloud.beforeSave('HomeServiceListReview', async (req, res) => {

  let obj = req.object
  let user = req.user
  const attrs = obj.attributes

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    acl.setWriteAccess(user, true)
    obj.setACL(acl)
    obj.set('user', user)
    obj.set('isInappropriate', false)
  } else {
    res.success();
  }

  try {

    let query = new Parse.Query('HomeServiceListReview')
    query.equalTo('user', user)
    query.equalTo('homeservicelist', attrs.homeservicelist)

    let exists = await query.first()

    if (exists) {
      return res.error(5000, 'You already write a review for this homeservicelist')
    } else if (obj.get('rating') < 1) {
      return res.error(5001, 'You cannot give less than one star')
    } else if (obj.get('rating') > 5) {
      return res.error(5002, 'You cannot give more than five stars')
    } else {
      res.success()
    }

  } catch (err) {
    res.error(err.message)
  }

});


Parse.Cloud.afterSave('HomeServiceListReview', async (req) => {

  const attrs = req.object.attributes

  try {

    let query = new Parse.Query('HomeServiceList')
    let homeservicelist = await query.get(attrs.homeservicelist.id)

    if (homeservicelist) {
      homeservicelist.increment('ratingCount')
      homeservicelist.increment('ratingTotal', attrs.rating)
      homeservicelist.save(null, { useMasterKey: true })
    }

  } catch (err) {
    console.warn(err.message)
  }

})


//end jobslist

//homeservcie end

Parse.Cloud.beforeSave(Parse.User, async (req, res) => {

  let user = req.object

  // We need to retrieve extra data
  // if user was logged in with facebook

  let authData = user.get('authData')
  console.log(authData);

  if (!user.existed() && authData) {

    try {

      let httpResponse = await Parse.Cloud.httpRequest({
        url: 'https://graph.facebook.com/me?fields=email,id,name&access_token=' + authData.facebook.access_token
      })
        
      user.set('name', httpResponse.data.name)
      user.set('username', httpResponse.data.id)
      user.set('facebookId', httpResponse.data.id)

      let paramsRequest = {
        url: 'https://graph.facebook.com/' + authData.facebook.id + '/picture',
        followRedirects: true,
        params: { type: 'large' }
      }
        
      let httpResponse1 = await Parse.Cloud.httpRequest(paramsRequest)

      let buffer = httpResponse1.buffer
      let base64 = buffer.toString('base64')
      let parseFile = new Parse.File('image.jpg', { base64: base64 })

      await parseFile.save()
      user.set('photo', parseFile)

      res.success()

    } catch (err) {
      res.error('Facebook request error')
    }

  } else {
    
    if (!user.get('photo') || !user.dirty('photo')) return res.success()

    let imageUrl = user.get('photo').url()

    try {

      let httpResponse = await Parse.Cloud.httpRequest({ url: imageUrl })
      
      let imageResizedData = await sharp(httpResponse.buffer).resize(200, 200).toBuffer()
  
      let file = new Parse.File('image.jpg', {
        base64: imageResizedData.toString('base64')
      })
  
      await file.save()
  
      user.set('photo', file)
  
      res.success()
  
    } catch (err) {
      res.error('Unable to process image')
    }

  }
})

Parse.Cloud.afterSave(Parse.User, function (req) {

  var user = req.object;

  if (!user.existed()) {

    var roleName = user.get('roleName');

    var query = new Parse.Query(Parse.Role);
    query.equalTo('name', roleName);
    query.first({ useMasterKey: true }).then(function (role) {

      if (!role) return;

      role.getUsers().add(user);
      return role.save(null, { useMasterKey: true });
    });
  }
})

Parse.Cloud.beforeSave('SliderImage', (req, res) => {

  let obj = req.object
  let user = req.user
  console.log(obj)

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
    obj.set('isActive', true)
  }

  res.success()
})

Parse.Cloud.beforeSave('Post', async (req, res) => {

  let obj = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
  }

  if (obj.dirty('title') && obj.get('title')) {
    obj.set('canonical', obj.get('title').toLowerCase())
  }

  if (!obj.get('image')) return res.success()

  var image = obj.get('image')

  try {

    let httpResponse = await Parse.Cloud.httpRequest({ url: image.url() })
    console.log(httpResponse.buffer)
    let imageResizedData = await sharp(httpResponse.buffer).resize(600).toBuffer()
    let imageThumbData = await sharp(httpResponse.buffer).resize(200, 200).toBuffer()

    let file = new Parse.File('image.jpg', {
      base64: imageResizedData.toString('base64')
    })

    let thumb = new Parse.File('image.jpg', {
      base64: imageThumbData.toString('base64')
    })

    await file.save()
    await thumb.save()

    obj.set('image', file)
    obj.set('imageThumb', thumb)

    res.success()

  } catch (err) {
    res.error('Unable to process image')
  }
})

Parse.Cloud.afterSave('Post', (req) => {

  const obj = req.object
  const attrs = obj.attributes

  if (!obj.existed()) {

    const query = new Parse.Query(Parse.Installation)
    query.containedIn('deviceType', ['ios', 'android'])
    
    const params = {
      where: query,
      data: {
        alert: attrs.title,
        sound: 'default'
      }
    }

    Parse.Push.send(params, { useMasterKey: true })
  }

})

Parse.Cloud.beforeSave('Notification', (req, res) => {

  let obj = req.object
  let user = req.user

  if (!user && !req.master) return res.error('Not Authorized')

  if (!obj.existed()) {
    let acl = new Parse.ACL()
    acl.setPublicReadAccess(true)
    acl.setRoleWriteAccess('Admin', true)
    obj.setACL(acl)
  }

  res.success()
})

Parse.Cloud.afterSave('Notification', (req, res) => {

  const obj = req.object
  const attrs = obj.attributes

  if (!obj.existed()) {

    const query = new Parse.Query(Parse.Installation)
    query.containedIn('deviceType', ['ios', 'android'])
    
    const params = {
      where: query,
      data: {
        alert: attrs.message,
        sound: 'default'
      }
    }

    Parse.Push.send(params, { useMasterKey: true })
  }

})