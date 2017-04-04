describe('Controller: MenuController', function () {

  beforeEach(module('confusionApp'));

  var MenuController, scope, mockDishes;

  beforeEach(inject(function ($controller,  $rootScope, menuFactory) {

    scope = $rootScope.$new();
    MenuController = $controller('MenuController', {
      $scope: scope, menuFactory: menuFactory
    });

  }));

  it('deve ter a listagem dos pratos', function(){
      expect(scope.dishes).toBeDefined();
      expect(scope.dishes.length).toBe(4);

  });

  it('os pratos devem estar em ordem', function() {
      expect(scope.dishes[0].name).toBe("Uthapizza");
      expect(scope.dishes[1].label).toBe("New");
  });

  it('deve trocar a tab com base na que foi clicada', function(){
      expect(scope.tab).toEqual(1);
      scope.select(3);
      expect(scope.tab).toEqual(3);
      expect(scope.filtText).toEqual('mains');

  });
});
