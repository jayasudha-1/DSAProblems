var rotate = function(matrix) {
    for(let i=0; i<matrix.length;i++){
         for(let j=i;j<matrix.length;j++){
           let temp =matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
         }
    }
         for(let i=0;i<matrix.length;i++){
            matrix[i].reverse();
         }
    };

/*I am doing transpose ; converting rows to column and then reverse the row*/