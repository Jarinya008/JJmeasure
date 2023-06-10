#include <stdio.h>
int main(){
  int n[5]={5,4,8,3,6};
  //printf("%d",s);
  int sort[5];
  for(int i=0;i<5;i++){
    int x=n[i];
    for(int j=0;j<4;j++){
      if(x>n[j]){
        n[j]=n[j+1];
      }
    }
  }
  for(int i=0;i<5;i++){
    printf("%d\t",n[i]);
  }
}