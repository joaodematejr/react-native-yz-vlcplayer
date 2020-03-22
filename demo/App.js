import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { VlcSimplePlayer } from 'react-native-yz-vlcplayer';

export default function App() {
  const [isOnStartFullScreen, setOnStartFullScreen] = useState(true);
  const [isOnCloseFullScreen, setOnCloseFullScreen] = useState(true);
  const [isFull, setFull] = useState(false);
  const [isCloseAuto, setCloseAuto] = useState(false);
  const [isScroll, setScroll] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView >
        <Text style={{ margin: 10 }}>Fonte ao vivo do protocolo RTMP, recarregamento automático</Text>
        <VlcSimplePlayer
          url={"http://hdl3.douyucdn.cn/live"}
          isLive={true}
          autoReloadLive={true}
          style={{ width: '100%' }}
          onStartFullScreen={isOnStartFullScreen}
          onCloseFullScreen={isOnCloseFullScreen}
        />
        <Text style={{ marginTop: 10 }}>Fonte ao vivo do protocolo RTMP, recarregamento não automático</Text>
        <VlcSimplePlayer
          url={"rtmp://live.hkstv.hk.lxdns.com/live/hks"}
          isLive={true}
          autoReloadLive={false}
          style={{ width: '100%' }}
          onStartFullScreen={isOnStartFullScreen}
          onCloseFullScreen={isOnCloseFullScreen}
        />
        <Text style={{ marginTop: 20 }}>Anúncio, Exemplo de título</Text>
        <VlcSimplePlayer
          url={"http://bxyzvideo.doctorz.cn:8080/add2019/9.mp4"}
          style={{ width: '100%' }}
          onStartFullScreen={isOnStartFullScreen}
          onCloseFullScreen={isOnCloseFullScreen}
          showAd={true}
          reloadWithAd={true}
          //adUrl={require('./app/resource/1.mp4')}
          showTop={true}
          showBack={true}
          onLeftPress={() => { alert('Clicou no botão Voltar') }}
          showTitle={true}
          title={"Exibição do título"}
        />
        <Text style={{ marginTop: 20 }}>Exemplo vip</Text>
        <VlcSimplePlayer
          url={"http://bxyzvideo.doctorz.cn:8080/add2019/9.mp4"}
          style={{ width: '100%' }}
          onStartFullScreen={isOnStartFullScreen}
          onCloseFullScreen={isOnCloseFullScreen}
          useVip={true}
          vipPlayLength={180}
          onVipPress={() => { alert('Comprando...') }}
        />
        <Text style={{ marginTop: 20 }}>Recursos locais</Text>
        <VlcSimplePlayer
          style={{ width: '100%' }}
          //url={require('./app/resource/1.mp4')}
          onStartFullScreen={isOnStartFullScreen}
          onCloseFullScreen={isOnCloseFullScreen}
        />

        <Text style={{ marginTop: 20 }}>RTSP</Text>
        <VlcSimplePlayer
          style={{ width: '100%' }}
          url={"rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov"}
          //Orientation={Orientation}
          onStartFullScreen={isOnStartFullScreen}
          onCloseFullScreen={isOnCloseFullScreen}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
