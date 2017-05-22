angular.module('hollaAt', []);

angular.module('hollaAt').controller('voteCtrl', function($scope){
  $scope.count = 0;
  $scope.upVote = function() {
    $scope.count++;
  };
  $scope.downVote = function() {
    $scope.count--;
  }
}
)
