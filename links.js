window.addEventListener('load', function createlist() {
  // console.log('I WAS HEREEEEE')
  let sites = [
    'http://www.aavedown.com',
    'http://www.accidentally.gay',
    'http://www.addyis.gay',
    'http://www.ahl.gay',
    'http://www.allieis.gay',
    'http://www.aria20.com',
    'http://www.arnxm.com',
    'http://www.bbcoi.com',
    'http://www.bea.gay',
    'http://www.bobis.gay',
    'http://www.btc3l.com',
    'http://www.buychiabitcoin.com',
    'http://www.buychiacrypto.com',
    'http://www.buychiano.com',
    'http://www.buychianow.com',
    'http://www.calicoincoin.com',
    'http://www.calicointoken.com',
    'http://www.chiacoinz.com',
    'http://www.comficoin.com',
    'http://www.comfitoken.com',
    'http://www.cummiecoin.com',
    'http://www.cummiecoins.com',
    'http://www.cummiescoin.com',
    'http://www.cummietoken.com',
    'http://www.cumrocketcoins.com',
    'http://www.cumtoke.com',
    'http://www.cuntoken.com',
    'http://www.degenr.com',
    'http://www.degenrcoin.com',
    'http://www.degenrnft.com',
    'http://www.degenrtoken.com',
    'http://www.elenacoin.com',
    'http://www.elenatoken.com',
    'http://www.embtoken.com',
    'http://www.eth3l.com',
    'http://www.eth3s.com',
    'http://www.flunarcoin.com',
    'http://www.flunartoken.com',
    'http://www.g9trocoin.com',
    'http://www.galilel.com',
    'http://www.gayfor.gay',
    'http://www.gmrtoken.com',
    'http://www.gnshcoin.com',
    'http://www.gnshtoken.com',
    'http://www.ibstoken.com',
    'http://www.ilikebeing.gay',
    'http://www.imno.gay',
    'http://www.imnota.gay',
    'http://www.kemacoin.com',
    'http://www.levtoken.com',
    'http://www.lnchx.com',
    'http://www.maticbull.com',
    'http://www.mayb.gay',
    'http://www.newkitchenprices.com',
    'http://www.onotoken.com',
    'http://www.orally.gay',
    'http://www.pengolincoin.com',
    'http://www.pinkmcoin.com',
    'http://www.pinkmtoken.com',
    'http://www.pletoken.com',
    'http://www.poor.gay',
    'http://www.qostoken.com',
    'http://www.randodinna.com',
    'http://www.reallyfucking.gay',
    'http://www.rebathnearme.com',
    'http://www.reformed.gay',
    'http://www.safexicoin.com',
    'http://www.safexitoken.com',
    'http://www.sbytecoin.com',
    'http://www.sbytetoken.com',
    'http://www.schumerweed.com',
    'http://www.stakecubecoin.com',
    'http://www.sxicoin.com',
    'http://www.sxitoken.com',
    'http://www.tfctoken.com',
    'http://www.tpadtoken.com',
    'http://www.uunicly.com',
    'http://www.wstatoken.com',
    'http://www.xbtc21.com',
    'http://www.xn--budcaf-gva.com',
    'http://www.xn--weedcaf-hya.com',
    'http://www.andblinds.com',
    'http://www.arearesort.com',
    'http://www.bathllc.com',
    'http://www.bestcoastdemo.com',
    'http://www.blindstime.com',
    'http://www.caframing.com',
    'http://www.californiamason.com',
    'http://www.calitilesetter.com',
    'http://www.casitework.com',
    'http://www.catilesetting.com',
    'http://www.concreteca.com',
    'http://www.decoratingfirm.com',
    'http://www.drywallwestcoast.com',
    'http://www.eurekawindows.com',
    'http://www.feedhova.com',
    'http://www.friendlyfloor.com',
    'http://www.goldencoastlights.com',
    'http://www.goldencoastrepair.com',
    'http://www.goldenstateroofer.com',
    'http://www.heatingcommercial.com',
    'http://www.helpnationwide.com',
    'http://www.licensedelectrical.com',
    'http://www.llcplan.com',
    'http://www.lowpanw6.com',
    'http://www.patiochicago.com',
    'http://www.pslut.com',
    'http://www.realpatio.com',
    'http://www.rightsiding.com',
    'http://www.ruralglass.com',
    'http://www.siteworkcali.com',
    'http://www.smallexperiences.com',
    'http://www.sunroomtips.com',
    'http://www.tilecal.com',
    'http://www.tilesettingcal.com',
    'http://www.unicornsare.gay',
    'http://www.windowsrichmond.com',
    'http://www.algopcoin.com',
    'http://www.algoptoken.com',
    'http://www.altcoinchia.com',
    'http://www.analtoy.tech',
    'http://www.apptingo.com',
    'http://www.atexfo.com',
    'http://www.bisexual.tech',
    'http://www.bpriva.com',
    'http://www.bprivacoin.com',
    'http://www.bprivatoken.com',
    'http://www.horneygrannycoin.com',
    'http://www.horneygrannytoken.com',
    'http://www.hstcannabis.com',
    'http://www.hstmarijuana.com',
    'http://www.hststrain.com',
    'http://www.hygycoin.com',
    'http://www.hygytoken.com',
    'http://www.icoaltcoin.com',
    'http://www.icoalttoken.com',
    'http://www.icomemecoin.com',
    'http://www.icomemetoken.com',
    'http://www.icoshitcoin.com',
    'http://www.icoshittoken.com',
    'http://www.prett.gay',
    'http://www.shittokenico.com',
    'http://www.slutoken.com',
    'http://www.softwaredefined.tech',
    'http://www.strapon.tech',
    'http://www.tpadcoin.com',
    'http://www.uaxie.com',
    'http://www.vagtoken.com',
    'http://www.vnxlu.com',
    'http://www.wdrcoin.com',
    'http://www.wdrtoken.com',
    'http://www.wstacoin.com',
    'http://www.xovbank.com',
    'http://www.alleycatsoftware.com',
    'http://www.alliecatsoftware.com',
    'http://www.allycatsoftware.com',
    'http://www.bathleak.com',
    'http://www.bestenhance.com',
    'http://www.bitcoins-network.com',
    'http://www.bodyliftguide.com',
    'http://www.bridgeportapartment.com',
    'http://www.cannabisml.com',
    'http://www.canreduce.com',
    'http://www.carltoyota.com',
    'http://www.cartoil.com',
    'http://www.cbrsclasses.com',
    'http://www.ccpcolombia.com',
    'http://www.cebupedia.com',
    'http://www.cebupedia.org',
    'http://www.cloudagent.tech',
    'http://www.collectorscloud.com',
    'http://www.cryptodickcoin.com',
    'http://www.cryptolock.tech',
    'http://www.cryptotitleloanz.com',
    'http://www.cuckchallenge.com',
    'http://www.cuckgame.com',
    'http://www.cuckgames.com',
    'http://www.cuckoldchallenge.com',
    'http://www.cuckoldingchallenge.com',
    'http://www.cuckoldinggames.com',
    'http://www.debtoil.com',
    'http://www.defititleloan.com',
    'http://www.defititleloans.com',
    'http://www.defititleloanz.com',
    'http://www.deinwerbenetzwerk.com',
    'http://www.disabilityinsurance.tech',
    'http://www.dnaccloud.com',
    'http://www.easynetworkreporting.com',
    'http://www.easysecurityreporting.com',
    'http://www.e-oglasi.com',
    'http://www.financerfi.com',
    'http://www.fsu.gay',
    'http://www.gasjoint.com',
    'http://www.harrisburgrental.com',
    'http://www.hedonismnurses.com',
    'http://www.hedonismteachers.com',
    'http://www.hedonismtrip.com',
    'http://www.hedonismvacay.com',
    'http://www.hedonistic.gay',
    'http://www.hedotails.com',
    'http://www.hedotales.com',
    'http://www.herbsour.com',
    'http://www.hipspine.com',
    'http://www.hodlapes.com',
    'http://www.hodlingape.com',
    'http://www.hodlmooning.com',
    'http://www.hotwifegame.com',
    'http://www.hotwifegames.com',
    'http://www.hotwifinggame.com',
    'http://www.hotwifinggames.com',
    'http://www.initialresources.com',
    'http://www.insquote.tech',
    'http://www.instasecurityreporting.com',
    'http://www.insurancefor.gay',
    'http://www.insurancequote.tech',
    'http://www.insurethe.gay',
    'http://www.interradyne.com',
    'http://www.iotaas.tech',
    'http://www.ipamlite.com',
    'http://www.iseapi.com',
    'http://www.jerseycitydeck.com',
    'http://www.justkreators.com',
    'http://www.kitchenrenocost.com',
    'http://www.marijuanahall.com',
    'http://www.marijuanasaloon.com',
    'http://www.marketssecurities.com',
    'http://www.memcoinico.com',
    'http://www.memecoinsindex.com',
    'http://www.memecryptocoin.com',
    'http://www.memecryptocoins.com',
    'http://www.memecryptotoken.com',
    'http://www.memecryptotokens.com',
    'http://www.memelordzcoin.com',
    'http://www.memelordztoken.com',
    'http://www.memetokenico.com',
    'http://www.mentormedicine.com',
    'http://www.miamicondocollapsed.com',
    'http://www.missouriautoinsurance.org',
    'http://www.mortgagemeta.com',
    'http://www.mortgagequote.tech',
    'http://www.napabath.com',
    'http://www.napaleak.com',
    'http://www.napamold.com',
    'http://www.northporthousing.com',
    'http://www.nrgwealth.com',
    'http://www.oxnardrental.com',
    'http://www.palmbayapartment.com',
    'http://www.palmbayhousing.com',
    'http://www.paperaper.com',
    'http://www.paperhandedape.com',
    'http://www.pickoil.com',
    'http://www.pointthreat.com',
    'http://www.potgay.com',
    'http://www.potlgbtq.com',
    'http://www.potraffle.com',
    'http://www.potsweet.com',
    'http://www.powerball.gay',
    'http://www.ppweed.com',
    'http://www.profitsecurities.com',
    'http://www.providesfinancial.com',
    'http://www.psu.gay',
    'http://www.quotewizard.tech',
    'http://www.rainbowsare.gay',
    'http://www.rbitparkbd.com',
    'http://www.rebathcost.com',
    'http://www.rebathprices.com',
    'http://www.redesignmykitchen.com',
    'http://www.redoingbathroom.com',
    'http://www.redoingkitchen.com',
    'http://www.rehobothbeach.gay',
    'http://www.renterinsurance.tech',
    'http://www.rentersinsurance.tech',
    'http://www.replacementshower.com',
    'http://www.rihannacannabis.com',
    'http://www.rihannastrain.com',
    'http://www.rihannaweed.com',
    'http://www.cryptotitleloanz.com',
    'http://www.samlcloud.com',
    'http://www.schumersoon.com',
    'http://www.scoreoil.com',
    'http://www.sdafabric.com',
    'http://www.sdaorchestration.com',
    'http://www.secretdomaintools.com',
    'http://www.securityreform.com',
    'http://www.sharedad.com',
    'http://www.showerremodelcost.com',
    'http://www.siceler.com',
    'http://www.siiign.com',
    'http://www.sissychallenge.com',
    'http://www.skybluefins.com',
    'http://www.smallbathroomreno.com',
    'http://www.summervilleweed.com',
    'http://www.summysun.com',
    'http://www.sunnyvalemarijuana.com',
    'http://www.swingernurses.com',
    'http://www.swingerpartygame.com',
    'http://www.swingerteacher.com',
    'http://www.swingerteachers.com',
    'http://www.swingingnurse.com',
    'http://www.swingingnurses.com',
    'http://www.swingingteacher.com',
    'http://www.swingingteachers.com',
    'http://www.teachervacay.com',
    'http://www.thc69.com',
    'http://www.thccove.com',
    'http://www.thchall.com',
    'http://www.thcvineyard.com',
    'http://www.thelsgame.com',
    'http://www.theswingergame.com',
    'http://www.theswingerparty.com',
    'http://www.tokenslippage.com',
    'http://www.topsecretdomaintools.com',
    'http://www.tupaccannabi.com',
    'http://www.tupacstrain.com',
    'http://www.uaas.tech',
    'http://www.underinsured.tech',
    'http://www.uninsured.tech',
    'http://www.wastewatersecurity.com',
    'http://www.waterplantsecurity.com',
    'http://www.wholehouseremodel.com',
    'http://www.yigoti.com',
    'http://www.1chronic.com',
    'http://www.69pot.com',
    'http://www.airspancbrs.com',
    'http://www.alphabisabolol.com',
    'http://www.beachherb.com',
    'http://www.biggiestrain.com',
    'http://www.budinfusion.com',
    'http://www.budshipping.com',
    'http://www.budsour.com',
    'http://www.buycbrs.com',
    'http://www.buycbrsesim.com',
    'http://www.buycbrsesims.com',
    'http://www.buycbrssim.com',
    'http://www.buycbrssims.com',
    'http://www.buyesims.com',
    'http://www.buyweedseads.com',
    'http://www.buyweedseedonline.com',
    'http://www.cannabigrowtents.com',
    'http://www.caorganicweed.com',
    'http://www.chroniccocktail.com',
    'http://www.comparecbrs.com',
    'http://www.comparecbsr.com',
    'http://www.consultingcbrs.com',
    'http://www.coorganicweed.com',
    'http://www.covidclotshot.com',
    'http://www.delta3carene.com',
    'http://www.deorganicweed.com',
    'http://www.eeweed.com',
    'http://www.florganicweed.com',
    'http://www.ganjasour.com',
    'http://www.gaorganicweed.com',
    'http://www.gayvacations.gay',
    'http://www.growweedplant.com',
    'http://www.healthcarecbrs.com',
    'http://www.insquotes.tech',
    'http://www.installcbrs.com',
    'http://www.installongo.com',
    'http://www.iowabath.com',
    'http://www.jjweed.com',
    'http://www.jomonshiba.com',
    'http://www.jomonshibacoin.com',
    'http://www.kaneweed.com',
    'http://www.kingedibles.com',
    'http://www.kitchenupgradecost.com',
    'http://www.laneweed.com',
    'http://www.lifestyleteachers.com',
    'http://www.mdorganicweed.com',
    'http://www.mjterpenes.com',
    'http://www.ncorganicweed.com',
    'http://www.ongohelp.com',
    'http://www.ongowifi.com',
    'http://www.organicweedca.com',
    'http://www.organicweedde.com',
    'http://www.organicweedfl.com',
    'http://www.organicweedga.com',
    'http://www.organicweedpa.com',
    'http://www.organicweedsc.com',
    'http://www.organicweedtx.com',
    'http://www.organicweedva.com',
    'http://www.organicweedvt.com',
    'http://www.ozofweed.com',
    'http://www.paorganicweed.com',
    'http://www.privateltecbrs.com',
    'http://www.purposefour.com',
    'http://www.raspberryweed.com',
    'http://www.riverherb.com',
    'http://www.rrweed.com',
    'http://www.salesingle.com',
    'http://www.scorganicweed.com',
    'http://www.sinedibles.com',
    'http://www.skychronic.com',
    'http://www.ssweed.com',
    'http://www.switzerlandthc.com',
    'http://www.terpenebenefit.com',
    'http://www.thcrum.com',
    'http://www.transnerolido.com',
    'http://www.tupaccannabis.com',
    'http://www.tupacmarijuana.com',
    'http://www.tupacthc.com',
    'http://www.tupacweed.com',
    'http://www.txorganicweed.com',
    'http://www.usacbrs.com',
    'http://www.uscbrs.com',
    'http://www.vaorganicweed.com',
    'http://www.vtorganicweed.com',
    'http://www.warrenweed.com',
    'http://www.weedalys.com',
    'http://www.weedcatsup.com',
    'http://www.weedcoinnft.com',
    'http://www.weedexplore.com',
    'http://www.weedispo.com',
    'http://www.weedjellies.com',
    'http://www.weedmayo.com',
    'http://www.weedml.com',
    'http://www.weedmm.com',
    'http://www.weedmustard.com',
    'http://www.weedpart.com',
    'http://www.weedqq.com',
    'http://www.weedrelish.com',
    'http://www.weedsaloon.com',
    'http://www.weegrowtents.com',
    'http://www.willweed.com',
    'http://www.windycitythc.com',
    'http://www.yorkmarijuana.com',
    'http://www.model-coaching.com',
    'http://www.pot-barn.com',
    'http://www.weedgurl.com',
    'http://www.realityappraisal.com',
    'http://www.weedeliveryservicenearme.com',
    'http://www.weedll.com',
    'http://www.bellevueweed.com',
    'http://www.blackberrybud.com',
    'http://www.brotherlylovebud.com',
    'http://www.brotherlylovemarijuana.com',
    'http://www.brotherlyloveweed.com',
    'http://www.budliquor.com',
    'http://www.budmixers.com',
    'http://www.budresin.com',
    'http://www.budvodka.com',
    'http://www.charmcityweed.com',
    'http://www.chongcannabis.com',
    'http://www.chongweed.com',
    'http://www.dareefer.com',
    'http://www.dylancannabis.com',
    'http://www.emeraldcitybud.com',
    'http://www.emeraldcityweed.com',
    'http://www.gagacannabis.com',
    'http://www.gagamarijuana.com',
    'http://www.gagastrain.com',
    'http://www.giganticweed.com',
    'http://www.hampshirecannabis.com',
    'http://www.hampshiremarijuana.com',
    'http://www.hampshireweed.com',
    'http://www.hedonismmarijuana.com',
    'http://www.hedonismthc.com',
    'http://www.hedonismweed.com',
    'http://www.helpgrowweed.com',
    'http://www.honeydewweed.com',
    'http://www.italythc.com',
    'http://www.milehighbud.com',
    'http://www.petersburgweed.com',
    'http://www.pineberryweed.com',
    'http://www.wakeweed.com',
    'http://www.watermelonweed.com',
    'http://www.waynecannabis.com',
    'http://www.waynemarijuana.com',
    'http://www.baltimorebud.com',
    'http://www.baltimorecityweed.com',
    'http://www.boyntonbeachweed.com',
    'http://www.brazilweed.com',
    'http://www.budvineyard.com',
    'http://www.cbrsaas.com',
    'http://www.cbrscells.com',
    'http://www.cbrscert.com',
    'http://www.cbrscertifications.com',
    'http://www.cbrscloud.com',
    'http://www.cbrsdesigns.com',
    'http://www.cbrshelp.com',
    'http://www.cbrshosting.com',
    'http://www.cbrsindustrial.com',
    'http://www.cbrslan.com',
    'http://www.cbrsprivatelte.com',
    'http://www.cbrsprivateltenetwork.com',
    'http://www.cbrspro.com',
    'http://www.cbrsradio.com',
    'http://www.cbrssale.com',
    'http://www.cbrssdr.com',
    'http://www.cbrssim.com',
    'http://www.cbrssims.com',
    'http://www.cbrssolution.com',
    'http://www.cbrstrainer.com',
    'http://www.cbrstraining.com',
    'http://www.cbrswan.com',
    'http://www.cbrswlan.com',
    'http://www.clearwaterweed.com',
    'http://www.dcbrs.com',
    'http://www.discountesims.com',
    'http://www.kissimmeeweed.com',
    'http://www.licensecbrs.com',
    'http://www.magiccitybud.com',
    'http://www.naplesweed.com',
    'http://www.nebraskapot.com',
    'http://www.neworleansbud.com',
    'http://www.niagarafallsweed.com',
    'http://www.pantryremodel.com',
    'http://www.plainsweed.com',
    'http://www.potlube.com',
    'http://www.potmixer.com',
    'http://www.russiaweed.com',
    'http://www.santaclaraweed.com',
    'http://www.sinmarijuana.com',
    'http://www.summervillemarijuana.com',
    'http://www.summitweed.com',
    'http://www.thcbasket.com',
    'http://www.thcbundle.com',
    'http://www.westvirginiapot.com',
    'http://www.weedcourrier.com',
    'http://www.costaricacoralreef.com',
    'http://www.njsuqungc.com',
    'http://www.ciniji.com',
    'http://www.pallisade.com',
    'http://www.dainmediaart.com',
    'http://www.freakconcept.com',
    'http://www.emo-gz.com',
    'http://www.emo-g.com',
    'http://www.emo-gs.com',
    'http://www.emo-ji.com',
    'http://www.emo-jis.com',
    'http://www.eshkaf.com',
    'http://www.managedcbrs.com'
    
  ],
    ul = document.createElement('ul');
  ul.setAttribute("id", "loadedlinks")
  //ul.className = "footer-links"
  document.getElementById('loadlinks').appendChild(ul);

  function shuffleArray(sites) {
    for (let i = sites.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sites[i], sites[j]] = [sites[j], sites[i]];
    }
  }
  shuffleArray(sites)

  sites.forEach(function (site) {
    li = document.createElement('li');
    document.getElementById('loadedlinks').appendChild(li);
    let a = document.createElement('a')
    a.href = site;
    li.appendChild(a);
    // console.log(a);
    a.innerHTML += site;
  });

})
