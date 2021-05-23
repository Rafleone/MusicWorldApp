/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategory = /* GraphQL */ `
  subscription OnCreateAlbumCategory {
    onCreateAlbumCategory {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadlines
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAlbumCategory = /* GraphQL */ `
  subscription OnUpdateAlbumCategory {
    onUpdateAlbumCategory {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadlines
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAlbumCategory = /* GraphQL */ `
  subscription OnDeleteAlbumCategory {
    onDeleteAlbumCategory {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadlines
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadlines
      songs {
        items {
          id
          url
          title
          artist
          artwork
          imageUri
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadlines
      songs {
        items {
          id
          url
          title
          artist
          artwork
          imageUri
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadlines
      songs {
        items {
          id
          url
          title
          artist
          artwork
          imageUri
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      url
      title
      artist
      artwork
      imageUri
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadlines
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      url
      title
      artist
      artwork
      imageUri
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadlines
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      url
      title
      artist
      artwork
      imageUri
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadlines
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
