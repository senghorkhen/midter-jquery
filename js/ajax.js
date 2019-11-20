$(document).ready(function () {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (data) {
            var result = "";
            data.hits.forEach(el => {
                result += `
                <div class="col-6">
                <div class="card-header">
                    <img src="${el.userImageURL}" style = "border-radius: 50%" width="40">
                    <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#v${el.id}">View</button>
                    &nbsp;${el.user}
                </div>
                <div class="card-body">
                    <img src="${el.largeImageURL}" class="img-fluid">
                </div>
            </div>

<!-- The Modal -->
<div class="modal fade" id="v${el.id}">
<div class="modal-dialog">
  <div class="modal-content">
  
    <!-- Modal Header -->
    <div class="modal-header">
        <img src="${el.userImageURL}" style = "border-radius: 50%" width="40">  
        &nbsp;${el.user}   
        <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>
    
    <!-- Modal body -->
    <div class="modal-body">
    <img src="${el.largeImageURL}" class="img-fluid">
    <hr>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item">
        &nbsp;<i class="material-icons float-right" style="color: blue">thumb_up</i>
        ${el.likes}
        </li>
        <li class="list-group-item">
        &nbsp;<i class="material-icons float-right" style="color: green">comment</i>
        ${el.comments}
        </li>
        <li class="list-group-item">
        &nbsp;<i class="material-icons float-right" style="color: red">favorite_border</i>
        ${el.likes}
        </li>
        <li class="list-group-item">
        &nbsp;<i class="material-icons float-right text-info">group</i>
        ${el.views}
        </li>
    </ul>
    </div> 
  </div>
</div>
</div>       
                `;
            });
            $('#result').append(result);
        }
    });
});

