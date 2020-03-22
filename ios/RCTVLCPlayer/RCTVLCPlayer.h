#import "React/RCTView.h"

@class RCTEventDispatcher;

@interface RCTVLCPlayer : UIView

@property(nonatomic, copy) RCTBubblingEventBlock onVideoProgress;
@property(nonatomic, copy) RCTBubblingEventBlock onVideoLoadStart;
@property(nonatomic, copy) RCTBubblingEventBlock onSnapshot;
@property(nonatomic, copy) RCTBubblingEventBlock onIsPlaying;
@property(nonatomic, copy) RCTBubblingEventBlock onVideoStateChange;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
