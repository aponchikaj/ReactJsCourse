export default function Classes(){
  // Classes in react can be used as functions its type of function we can get parameters with constructor(parameter){}
  // Lets Make Favorite Music & Artist class functions

  let FavoriteMusic;
  let FavoriteArtist;
  //Made 2 variable
  
  //Artist class is for Favirote artist variable we are going to assign Param to it.
  //Lets Make it Secured.
  class Artist{

    Error(Which){
      if(Which =='music'){
        return `Please Assign Artist Music!`
      }else if(Which=='artist'){
        return `Please Assign Artist name!`
      }
    }

    constructor(ArtistName){
      if(ArtistName){
        FavoriteArtist = ArtistName
      }else{
        this.Error('artist')
      }
    }

    ShowArtist(){
      return `My Favorite Artist is ${FavoriteArtist}`;
    }
  }
  //With This we are assigning Parameter 'artistName' to Variable Favorite Artist

  //we have 2 functions Error() & ShowArtist. Error returns error message is ArtistName isn't Assigned.
  //And ShowArtist Returns FavoriteArtist variable and SM text;

  //Lets Make Another Class To Assign Music to favoriteMusic Variable
  //Same again SECURED.
  //We are using extends which is giving us functions from assigned Class (parent) to Music class (child) 
  class Music extends Artist{
    constructor(ArtistName,ArtistMusic){
      super(ArtistName)
      //So super is used to do parent constructor logic
      if(ArtistMusic){
        FavoriteMusic = ArtistMusic
      }else{
        this.Error('music')
      }
    }
    ShowEverything(){
        return `${this.ShowArtist()} and His/Her Favorite music is ${FavoriteMusic}`
    }
    ShowMusic(){
        return `My Favorite Music is ${FavoriteMusic}`
    }
  } 
  const MyFavorites = new Music('Aphex Twin','#3')
  return(
    <>
        <p>{MyFavorites.ShowEverything()}</p>
    </>
  )
}