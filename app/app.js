angular.module('hollaAt', []);

angular.module('hollaAt').controller('voteCtrl', function($scope) {
  $scope.count = 0;
  $scope.upVote = function() {
    $scope.count++;
  };
  $scope.downVote = function() {
    $scope.count--;
  }
});

angular.module('hollaAt').controller('chooseCtrl', function($scope) {
  $scope.reps = {
    al: {
      seat1: {
        first: "richard",
        last: "shelby ",
        party: "republican ",
        inDate: "1987 ",
        outDate: "2022 ",
        profileImg: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Richard_Shelby%2C_official_portrait%2C_112th_Congress_crop.jpg",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ak: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    az: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ar: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ca: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    co: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ct: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    de: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    fl: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ga: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    hi: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    id: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    il: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    in: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ia: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ks: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ky: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    la: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    me: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    md: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ma: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    mi: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    mn: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ms: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    mo: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    mt: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ne: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    nv: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    nh: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    nj: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    nm: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    ny: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      }
    },
    nc: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    nd: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    oh: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    ok: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    or: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    pa: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    ri: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    sc: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    sd: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    tn: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    tx: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    ut: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    vt: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    va: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    wa: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    wv: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    wi: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
    wy: {
      seat1: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },

      seat2: {
        first: " ",
        last: " ",
        party: " ",
        inDate: " ",
        outDate: " ",
        profileImg: " ",
        twitter: " ",
        email: " "
      },
    },
  }
  //$scope.selectedRep = reps[0];
  //fuckerfuckfuckfuck, how do I set a default here???
});
